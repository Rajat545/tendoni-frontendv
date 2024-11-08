"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Grand from "@Images/slider/spices.jpeg";
import "./style.css";
import dynamic from "next/dynamic";
import Header from '../../../components/Header'

import toast, { Toaster } from "react-hot-toast";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import OrderSuccessFull from "../OrderSuccessFull/page";
import Modal from "react-modal";
import { useRouter } from "next/navigation";
const OrderSuccessFull = dynamic(() => import("../OrderSuccessFull/page"), {
  ssr: false, // Optional: If you want to prevent server-side rendering
});
const Shop = () => {

  
//  let saveData = JSON.parse(localStorage.getItem('formData')) || []

let saveData = [];
if (typeof window !== "undefined") {
  saveData = JSON.parse(localStorage.getItem("formData")) || [];
}
  const router = useRouter();
  console.log(saveData,'data')
  const [updateAddressId, setUpdateAddressId] = useState(saveData?.addressId);
  const [popUp, setPopUp] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [cartData, setCartData] = useState("");
  const [couponData,setCouponData] = useState();
  const [couponCode,setCouponCode] = useState('')
  const [customerData, setCustomerData] = useState([]);
  const { addressData, setAddressData } = useState([]);
  const [radioOptions, setRadioOptions] = useState("Razorpay");
  const [newAddress, setNewAddress] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState([]);
  const [address, setAddress] = useState();
  const [couponApplied, setCouponApplied] = useState(false);
  const [formData, setFormData] = useState({
    addressLine1: address ? address?.addressLine1 : saveData?.addressLine1,
    pincode: address ? address?.pincode : saveData?.pincode,
    city: address ? address?.city : saveData?.city,
    state: address ? address?.state : saveData?.state,
    country: address ? address?.country : saveData?.country,
    landmark: address ? address?.landmark : saveData?.landmark,
    name: address ? address?.name : saveData?.name,
    number: address ? address?.number : saveData?.number,
    addressId: address ? address?.addressId : saveData?.addressId,
  });
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (userData.data) {
        setCustomerId(userData.data.customerId); // Set customerId from user data
      }
    }
  }, []);
  
  const handleAddressSelect = (item) => {
    var updateAddressId = item.addressId;
    setUpdateAddressId(updateAddressId);
    localStorage.setItem('formData',JSON.stringify(item))
    setFormData({
      ...item,
    });
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (userData.data) {
        setCustomerId(userData.data.customerId); // Set customerId from user data
      }
    }
  }, []);
  const fetchAddressById = useCallback(async (customerId) => {
    try {
      if (typeof window !== "undefined") {
        const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
        if (!userData.data) {
          throw new Error("User data not found");
        }
        const { access_token, addressId } = userData.data;
        const response = await fetch(
          "https://api.tendonigroup.com/web/api/v1/getAddressByAddressId",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `${access_token}`,
            },
            body: JSON.stringify({ addressId }),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAddress(data.data);
      }
    } catch (error) {
      toast.error("Error fetching address data:");
    }
  }, []);
  const fetchCustomerDataById = useCallback(async (customerId) => {
    try {
      if (typeof window !== "undefined") {
        const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
        if (!userData.data) {
          throw new Error("User data not found");
        }
        const { access_token } = userData.data;
        const response = await fetch(
          "https://api.tendonigroup.com/web/api/v1/getCustomerDataById",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `${access_token}`,
            },
            body: JSON.stringify({ customerId }),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data.data?.address)) {
          setCustomerData(data.data?.address);
        } else {
          throw new Error("Invalid customer data format received");
        }
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  }, []);
  useEffect(() => {
    if (customerId) {
      fetchAddressById();
      fetchCustomerDataById(customerId);
    }
  }, [customerId, fetchAddressById, fetchCustomerDataById]);
  const handleDelete = async (item) => {
    try {
      if (typeof window !== "undefined") {
        const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
        const { access_token } = userData.data;
        const response = await fetch(
          "https://api.tendonigroup.com/web/api/v1/deleteAddressById",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: access_token,
            },
            body: JSON.stringify({ addressId: item?.addressId }),
          }
        );
        if (!response.ok) {
          // Handle non-200 responses here
          throw new Error("Network response was not ok");
        }
        setCustomerData(
          customerData.filter(
            (address) => address.addressId !== item?.addressId
          )
        );
        toast.success("Address deleted successfully");
      }
    } catch (error) {
      toast.error("Error deleting address");
    }
  };
  const fetchCartData = useCallback(async () => {
    try {
      if (typeof window !== "undefined") {
        const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
        if (!userData.data) {
          throw new Error("User data not found");
        }
        const { customerId, access_token } = userData.data;
        const response = await fetch(
          "https://api.tendonigroup.com/web/api/v1/getCart",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `${access_token}`,
            },
            body: JSON.stringify({ ...formData, customerId }),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data?.data?.items.length == 0) {
          router.push("/shop-now");
        }
        setCartData(data.data || []);
      }
    } catch (error) {
      toast.error("Error fetching cart data:", error);
    }
  },[]);
  useEffect(() => {
    const savedCouponData = localStorage.getItem("couponData");
    const savedCouponCode = localStorage.getItem("couponCode");

    if (savedCouponData) {
      try {
        setCouponData(JSON.parse(savedCouponData));
        setCouponApplied(true);
      } catch (e) {
        console.error("Error parsing couponData from localStorage:", e);
      }
    }

    if (savedCouponCode) {
      setCouponCode(savedCouponCode); // Pre-fill coupon code input if needed
    }
  }, []);
  const handleAddCoupon =async()=>{
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
        if (!userData.data) {
          throw new Error("User data not found");
        }
        const { access_token } = userData.data;
      
      const couponResponse = await fetch(
        "https://api.tendonigroup.com/web/api/v1/applyCoupon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `${access_token}`,
          },
          body: JSON.stringify({ couponCode }),
        }
      );
      const result = await couponResponse.json();
      if (result.data) {
        localStorage.setItem("couponData", JSON.stringify(result.data));
        localStorage.setItem("couponCode", couponCode);

        setCouponData(result.data); 
        setCouponApplied(true); 
        toast.success("Coupon applied successfully!");
      } else {
        setCouponApplied(false);
        setCouponData(null);
        toast.error("Coupon not valid or not applied");
      }
    
      localStorage.setItem("couponData", JSON.stringify(result.data));
      localStorage.setItem("couponCode", couponCode);
      setCouponCode(couponCode);
   
    } catch (error) {
      console.log(error)
      toast.error(error.message || "Something went wrong");
    }
  }
  const handleRadioChange = (e) => {
    setRadioOptions(e.target.value);
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData  = {...formData, [name]: value}
    setFormData({ ...formData, [name]: value });
    setFormData(updatedFormData)
   
  };
  // Handle Submit
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
  
    try {
      if (typeof window !== "undefined") {
        const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
        if (!userData.data) {
          throw new Error("User data not found");
        }
        const { customerId, access_token } = userData.data;
        const response = await fetch(
          "https://api.tendonigroup.com/web/api/v1/createAddress",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `${access_token}`,
            },
            body: JSON.stringify({ ...formData, customerId }),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAddress(data.data);
        const newAddressData = data.data;
        toast.success(data.message);
        const newAddress = {
          addressId: newAddressData.addressId,
          name: formData.name,
          addressLine1: formData.addressLine1,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          landmark: formData.landmark,
          number: formData.number,
          pincode: formData.pincode,
        };
        setCustomerData((prevCustomerData) => [
          ...prevCustomerData,
          newAddress,
        ]);
        setFormData({
          ...formData,
          name: "",
          addressId: "",
          addressLine1: "",
          pincode: "",
          city: "",
          state: "",
          country: "",
          landmark: "",
          number: "",
        });
        localStorage.removeItem('formData')
      }

    } catch (error) {
      toast.error("Error saving address !", error);
    }
  }, [formData]);
  const amount = Math.round((couponData ? couponData?.finaltotalPrice : cartData.finaltotalPrice) * 100);
  const handleOrderSubmit = async (e) => {
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      const requiredFields = [
        "addressLine1",
        "pincode",
        "city",
        "state",
        "country",
        "name",
        "number",
        "landmark",
      ];
      for (const field of requiredFields) {
        if (!formData[field]) {
          toast.error(
            `Please fill out ${field.replace(/([A-Z])/g, " $1").toLowerCase()}.`
          );
          return;
        }
      }
      const orderData = {
        customerId: userData.data?.customerId,
        addressId: updateAddressId,
        paymentMethod: radioOptions,
      };
      if (!validateOrderData(orderData)) {
        return;
      }

      const response = await fetch(
        "https://api.tendonigroup.com/web/api/v1/orderSubmit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: userData.data?.access_token,
          },
          body: JSON.stringify(orderData),
        }
      );
      localStorage.removeItem('formData')
  
      const data = await response.json();
      if (response.ok) {
        toast.success("Order placed successfully!");
        localStorage.removeItem('couponCode')
        localStorage.removeItem('couponData')
        setPopUp(true);
        setCartData([]);
        setCartData([]);
        setTimeout(() => {
          router.push("/shop-now");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }, 0);
        
      } else {
        toast.error(
          "Error placing order: " + (data.message || "Unknown error")
        );
      }
    } catch (error) {
      toast.error("Error placing order: " + error.message);
    }
  };
  const validateOrderData = (orderData) => {
    if (!orderData.customerId) {
      toast.error("Customer ID is required.");
      return false;
    }
    if (!orderData.addressId) {
      toast.error("Address ID is required.");
      return false;
    }
    if (!orderData.paymentMethod) {
      toast.error("Payment method is required.");
      return false;
    }
    return true;
  };
  
  const createPaymentOrder = async (amount, name) => {
    try {
      if (typeof window !== "undefined") {
        const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
        if (!userData.data || !userData.data.access_token) {
          throw new Error("User data not found or access token missing");
        }
        const { access_token } = userData.data;
        const response = await fetch(
          "https://api.tendonigroup.com/web/api/v1/CreatePaymentData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `${access_token}`,
            },
            body: JSON.stringify({
              amount: amount,
              currency: "INR",
              notes: {
                name: name,
              },
              receipt: "receipt_2795",
            }),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { data } = await response.json();
        return {
          id: data.id, 
          amount: data.amount,
        };
      }
    } catch (error) {
      toast.error("Error creating payment order:", error.message);
      throw error;
    }
  };
  const verifyPayment = async (payment_id, order_id, signature) => {
    try {
      if (typeof window !== "undefined") {
        const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
        if (!userData.data || !userData.data.access_token) {
          throw new Error("User data not found or access token missing");
        }
        const { access_token } = userData.data;
        const response = await fetch(
          "https://api.tendonigroup.com/web/api/v1/verifyPayment",
          {
            method: "POST",
            headers: {
              "x-razorpay-signature": signature,
              "Content-Type": "application/json",
              Authorization: `${access_token}`,
              Accept: "application/json",
            },
            body: JSON.stringify({
              payment_id,
              order_id,
            }),
          }
        );
        if (!response.status == 200) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        handleOrderSubmit();
        return data;
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      throw error;
    }
  };
  const handleOnlinePay = async () => {
    if (!formData || Object.keys(formData).length === 0) {
      toast.error("Please select an address.");
      return;
    }
    const requiredFields = [
      "addressLine1",
      "pincode",
      "city",
      "state",
      "country",
      "name",
      "number",
      "landmark",
    ];
    const emptyFields = requiredFields.filter((field) => !formData[field]);
    if (emptyFields.length > 0) {
      toast.error("Please fill out all required fields.");
      return;
    }
    function loadScript(src) {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    }
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      const paymentOrder = await createPaymentOrder(amount, formData.name);
      if (!paymentOrder || !paymentOrder.id || !paymentOrder.amount) {
        throw new Error("Failed to create or invalid payment order");
      }
      const options = {
        key: "rzp_test_fuOkanrFo8Ztyd",
        amount: paymentOrder.amount.toString(),
        currency: "INR",
        name: `${formData?.name}`,
        description: "Transaction",
        image: "/logo.png",
        order_id: paymentOrder.id,
        prefill: {
          name: `${formData?.name}`,
          email: `${customerData[0].email}`,
          contact: `${formData.number}`,
        },
        notes: {
          address: `${formData.addressLine1}`,
        },
        handler: async (response) => {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;
          try {
            const verificationResponse = await verifyPayment(
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature
            );
            if (verificationResponse.success) {
              toast.success("Payment was successful and verified!");
            } else {
              toast.error("Payment verification failed!");
            }
            localStorage.removeItem('formData')
            localStorage.removeItem('couponCode')
            localStorage.removeItem('couponData')
          } catch (error) {
            toast.error("Error verifying payment!");
          }
          await handleOrderSubmit(e);
          // setTimeout(() => {
          //   router.push('/shop-now');
          //   setTimeout(() => {
          //     window.location.reload();
          //   }, 1000);
          // }, 0);
        },
        theme: {
          color: "#acaf4c",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);
  useEffect(() => {
    fetchAddressById();
  }, [fetchAddressById]);

  const removeItem = async (cartId, itemId) => {
    try {
      if (typeof window !== "undefined") {
        const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
        if (!userData.data) {
          throw new Error("User data not found");
        }
        const { access_token } = userData.data;
        const response = await fetch(
          "https://api.tendonigroup.com/web/api/v1/removeSingleCartItem",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `${access_token}`,
            },
            body: JSON.stringify({
              cartId,
              itemId,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Field to remove Item");
        }
        const updateCart = await response.json();
        await fetchCartData();
        toast.success(updateCart.message);
      }
    } catch (error) {
      toast.error("Error removing item");
    }
  };

  return (
    <>
    <Header/>
    
      <div className="z-20">
        <Image
          src={Grand}
          alt="this is a image"
          className="lg:h-[80vh] h-auto w-full"
        />
      </div>
      <section className="w-full bg-white" id='responsive-section'>
        <div className="py-6 md:py-8 lg:py-10">
          <div id="responsive-dev" className="flex m-0">
            <div id="responsive-container" className="w-[50%]">
              <div
                className="container_checkOut ml-[55px]"
                style={{ height: "100%" }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John M. Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone</label>
                      <input
                        type="text"
                        id="number"
                        name="number"
                        placeholder="10-digit mobile number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address</label>
                      <input
                        type="text"
                        id="addressLine1"
                        name="addressLine1"
                        placeholder="542 W. 15th Street"
                        value={formData.addressLine1}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        maxLength={6}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="India"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">Landmark</label>
                      <input
                        type="text"
                        id="landmark"
                        name="landmark"
                        placeholder="Landmark"
                        value={formData.landmark}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                      <input type="checkbox" name="sameadr" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                      <span className="ml-2">Shipping address same as billing</span>
                    </label>
                  </div>
                  <div className="mt-6">
                    <button type="submit" id="pay-btn" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 transition duration-150 ease-in-out">
                      Create And Save Address
                    </button>
                  </div>
                </form>
                <div className="address-box pt-4 " id='address-card'>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {customerData.map((item, index) => (
                      <div className="address-list border rounded-lg p-6 shadow-lg relative bg-white" key={index}>
                        <DeleteForeverIcon
                          className="delete-icon absolute top-9 p- right-6 text-red-500 cursor-pointer hover:text-red-700 transition duration-400 h-2"
                          onClick={() => handleDelete(item)}
                        />
                        <h3 className="address-head text-xl font-semibold">Shipping Address</h3>
                        <div className="border-t mt-4 pt-4">
                          <label className="flex items-center mb-2">
                            <input
                              type="radio"
                              name="address"
                              checked={item.addressId === updateAddressId ? true : false}
                              className="address-selector mr-3 accent-indigo-600"
                              onChange={() => handleAddressSelect(item)}
                            />
                            <span className="font-medium text-gray-700">{item.name}</span>
                          </label>
                          <p className="text-gray-600">{item.addressLine1}</p>
                          <p className="text-gray-600">
                            {item.city}, {item.state}, {item.pincode}
                          </p>
                          <p className="mt-2 text-gray-600">{item.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div id="responsive-price" className=" w-[44.333333%]  ml-[40px]">
              <div className="container_checkOut bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold text-lg m-2">
                  Products{" "}
                  <span className="price text-black">
                    <b>{cartData.length}</b>
                  </span>
                </h4>
                <hr className="mb-4" />
                {cartData.items?.length > 0 ? (
                  cartData.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between mb-4 border-b pb-4"
                    >
                      <img
                        className="w-1/6 rounded-lg"
                        src={item.ProductImage}
                        alt={item.productName}
                        width={100}
                        height={100}
                      />
                      <div className="flex-1 ml-4">
                        <p className="font-medium text-gray-700">{item.ProductName}</p>
                        <p className="text-gray-500">{item.quantity} x {item.value}</p>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <p className="price text-red-500 line-through text-sm mb-1">
                          ₹{item.maxPrice}
                        </p>
                        <p className="price text-gray-900 font-semibold text-lg">
                          ₹{item.price}
                        </p>
                      </div>
                      <div>
                        <svg
                          className="h-6 w-6 text-red-400 cursor-pointer hover:text-red-600 transition duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={() => removeItem(item.cartId, item.itemId)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No products in cart</p>
                )}
                <div className="flex items-center space-x-4">
                <input
                  type="text"
                  id="coupon"
                  name="coupon"
                  value={couponCode}
                  onChange={(e)=>setCouponCode(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  placeholder="Enter your coupon code"
                />
                  <button
                    onClick={handleAddCoupon}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 mb-5"
                  >
                    Apply
                  </button>
                </div>
                <hr className="my-4" />
                <div className="container mx-auto max-w-xl">
</div>
                {!couponData ? (
                <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">Total MRP</p>
                  <p className="text-gray-900">₹{cartData.totalPrice}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">Discount</p>
                  <p className="text-green-500">{cartData.discount}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">Sub Total</p>
                  <p className="text-gray-900">₹{cartData.totalSalePrice}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">Shipping charge</p>
                  <p className="text-gray-900">+ ₹{cartData.deliveryCharge}</p>
                </div> 
                <div className="flex justify-between items-center font-semibold border border-gray-300 rounded-lg p-3 shadow-sm">
                  <p className="text-gray-700">Grand Total</p>
                  <p className="text-black">₹{cartData.finaltotalPrice}</p>
                </div>
              </div>
              
                  ) : (
                    <div className="space-y-2">
                      <div className="mt-4 text-green-600 text-lg font-semibold">
                          You saved ₹{couponData.couponPrice} successfully applied!
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-700">Total MRP</p>
                        <p className="text-gray-900">₹{couponData.totalPrice}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-700">Discount</p>
                        <p className="text-green-500">{couponData.discount}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-700">Sub Total</p>
                        <p className="text-gray-900">₹{couponData.totalSalePrice}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-700">Coupon Price</p>
                        <p className="text-green-500">₹{couponData.couponPrice} OFF</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-700">Sub Final Price</p>
                        <p className="text-gray-900">₹{couponData.subfinalTotalPrice}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-700">Shipping charge</p>
                        <p className="text-gray-900">+ ₹{couponData.deliveryCharge}</p>
                      </div>
                      <div className="flex justify-between items-center font-semibold border border-gray-300 rounded-lg p-3 shadow-sm">
                        <p className="text-gray-700">Grand Total</p>
                        <p className="text-black">₹{couponData.finaltotalPrice}</p>
                      </div>
                      
                    </div>
                  )
                }
              </div>
              <div className="container_checkOut mt-12 bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-medium text-lg mb-4">Shipping Method</h4>
                <div className="mainContainer">
                  <div className="card p-4">
                    <div className="payments-container space-y-4">
                      <div className="payments-wrapper">
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            value="Razorpay"
                            name="paymentMethod"
                            className="form-check-input accent-indigo-600"
                            checked={radioOptions === "Razorpay"}
                            onChange={handleRadioChange}
                          />
                          <span className="font-medium text-gray-700">Online Payment</span>
                        </label>
                      </div>
                      <div className="payments-wrapper">
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            value="COD"
                            name="paymentMethod"
                            className="form-check-input accent-indigo-600"
                            checked={radioOptions === "COD"}
                            onChange={handleRadioChange}
                          />
                          <span className="font-medium text-gray-700">Cash on Delivery</span>
                        </label>
                      </div>
                    </div>
                    {radioOptions === "Razorpay" ? (
                      <button
                        id="pay-btn"
                        onClick={handleOnlinePay}
                        className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
                      >
                        Pay Now
                      </button>
                    ) : (
                      <button
                        onClick={handleOrderSubmit}
                        id="pay-btn"
                        type="submit"
                        className="w-full mt-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
                      >
                        Place Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <Modal
                isOpen={popUp}
                onRequestClose={() => setPopUp(false)}
                contentLabel="Order Success"
                className="modal"
                overlayClassName="modal-overlay"
              >
                <OrderSuccessFull />
              </Modal>
            </div>
          </div>
        </div>
        <Toaster />
      </section>
    </>
  );
};
export default Shop;
