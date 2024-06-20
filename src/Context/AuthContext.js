'use client';
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const AuthContext = createContext();
let getToken;
export const setToken = (token) => {
  getToken = token;
};
export function AuthProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);

  const router = useRouter();

  //  ----------------------Login api ---------------


  async function handleSubmit(e) {

    e.preventDefault();
    console.log("Form submitted with:", email, password);

    const userData = { email, password }; // Combine email and password into an object
    try {
      const response = await fetch("https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/login", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userData) // Send userData object as JSON string
      });


      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      
      if (!data.error) {
        
        // localStorage.setItem("token", JSON.stringify(data?.access_token));
        localStorage.setItem("user-info", JSON.stringify(data));

        localStorage.setItem("access-token", JSON.stringify(data?.data?.access_token));
        setToken(data?.access_token);
        toast.success("Successfully logged in!");
        router.push("/shop-now");
      } else {
        toast.error(data.message || "Login failed! Please check your credentials and try again.");
      }
    } catch (error) {
      console.error("There was an error!", error);
      toast.error("Login failed! Please check your credentials and try again.");
    }
  }

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { customerId, access_token } = userData.data;
  
      if (!selectedAddress) {
        toast.error("Please select an address.");
        return;
      }
  
      const orderData = {
        customerId,
        addressId: selectedAddress.addressId,
        paymentMethod: radioOptions,
        items: cartData.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      totalAmount: `${totalSalePrice}`,
      };
  
      const response = await fetch(
        "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/orderSubmit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `${access_token}`,
          },
          body: JSON.stringify(orderData),
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      toast.success("Order placed successfully!");
      setCartData([]);
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error placing order.");
    }
  };

  // ---------------OrderHistory API ---------

  const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
  useEffect(() => {
    const fetchOrderHistory = async () => {
        if (!userData.data || !userData.data.customerId || !userData.data.access_token) {
            console.error('User data or token missing');
            router.push('/login');
            return;
        }

        const { customerId, access_token } = userData.data;
        console.log(customerId,"custumerID is here ")
        console.log(access_token, 'access_token');

        try {
            const response = await fetch("https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/orderHistoryData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `${access_token}`,
                },
                body: JSON.stringify({ customerId}),
            });

            if (!response.ok) {
                if (response.status === 401) {
                    console.error('Unauthorized Token, Please login again.');
                    router.push('/login');
                }
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data, 'Fetched order history data'); // Log the entire response
            setOrderHistory(data?.data || []);
            console.log(data.data.products, 'Order History final');
        } catch (error) {
            console.error('Error fetching order history:', error);
        }
    };

    if (userData?.data?.customerId) {
        fetchOrderHistory();
    }
}, [userData?.data?.customerId, router]);


  return (

    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        userInfo,
        setUserInfo,
        handleSubmit,
        handleAddressSelect,
        handleOrderSubmit,
        orderHistory,
        setOrderHistory
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export const isAuth = () => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("access-token");

    return getToken || accessToken ? true : false;
  }
};
