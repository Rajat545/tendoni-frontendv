'use client';
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [data, setData] = useState([]);
  const [variantData, setVariantData] = useState([]);
  const [cart, setCart] = useState([]);
  const [productId, setProductId] = useState("");
  const [checkOut, setCheckOut] = useState([]);
  const [count, setCount] = useState(1);
  const [variant, setVariant] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [singleProduct, setSingleProduct]= useState({})
  
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getAllSpicesProduct');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data);

        console.log('result', result.data);

        // Extract variants from the fetched data
        const allVariants = result.data.flatMap(product => product.Variant);
        setVariant(allVariants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const productVariants = cart.map(product => product.Variant);
    setVariant(...productVariants);
    console.log(productVariants, "productVariants");
  }, [cart]);

  //  ----------------------signup api ---------------

  const signUp = async (e) => {
    e.preventDefault();
    const item = { email, password, name, number };

    try {
      const response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/signup', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          'Accept': 'application/json'
        }
      });

      const data = await response.json();
      console.log("data", data);

      if (!data.error) {
        localStorage.setItem('token', data.token); 
        toast.success("Account Created Successfully!");
        router.push("/login");
      } else {
        toast.error(data.message || "Signup failed! Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Signup failed! Please try again.");
    }
  };

  const isProductInCart = (product) => cart.findIndex(({ productId }) => productId === product?.productId);


  // ------------------ProductById------------

  const getSingleProduct = async () => {
    try{
      const response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getAllSpicesProduct');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const singleProduct = await response.json();
      setSingleProduct(singleProduct.data)
      console.log(singleProduct,"singleProduct data")


    } catch(error){
                 console.error('Error fetching data:', error);
    }
  }
  
//  --------------------------------------------- add to cart api -----------------------

// const addToCart = async (item) => {
//    const token = localStorage.getItem('token')
//   try {
//     const response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/addToCart', {
//       method: 'POST',
//       body: JSON.stringify({ productId: item.productId, quantity: 1  }), // Adjust payload as needed
//       headers: {
//         "Content-Type": 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     });

//     const data = await response.json();
    
//     console.log(" the data you are trying to  add is successfully added to the cart");
//     setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);

//     if (!data.error) {
//       setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
//       toast.success("Product added to cart successfully!");
//     } else {
//       toast.error(data.message || "Failed to add product to cart! Please try again.");
//     }
//   } catch (error) {
//     console.error("Add to Cart error:", error);
//     toast.error("Failed to add product to cart! Please try again.");
//   }
// };

 


  return (
    <CartContext.Provider
      value={{
        data,
        cart,
        setCart,
        productId,
        setProductId,
        isProductInCart,
        variantData,
        setVariantData,
        checkOut,
        setCheckOut,
        count,
        setCount,
        variant,
        setVariant,
        showCartPopup,
        setShowCartPopup,
        name,
        setName,
        email,
        setEmail,
        number,
        setNumber,
        password,
        setPassword,
        signUp,
        getSingleProduct,
     
     
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
