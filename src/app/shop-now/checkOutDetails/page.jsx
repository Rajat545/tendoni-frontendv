"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Grand from "@Images/slider/spices.jpeg";
import "./style.css";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import { AuthContext } from "@/Context/AuthContext";
import OrderSuccessFull from "../OrderSuccessFull/page";
import Modal from 'react-modal';
import garamMasala from '@Images/ProductImages/garammasala.png';
import 'react-toastify/dist/ReactToastify.css';
// Modal.setAppElement('#__next');


const Shop = () => {
  const [popUp, setPopUp] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const [cartData, setCartData] = useState('');
  const [customerData, setCustomerData] = useState([]);
  const { addressData, setAddressData } = useState([])
  const [radioOptions, setRadioOptions] = useState("Razorpay");
  const [newAddress, setNewAddress] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState([]);
  const [address, setAddress] = useState('')
  const [formData, setFormData] = useState({
    addressLine1: address ? address?.addressLine1 : '',
    pinCode: address ? address?.pinCode : '',
    city: address ? address?.city : '',
    state: address ? address?.state : '',
    country: address ? address?.country : '',
    landmark: address ? address?.landmark : '',
    // zipCASHe: address ? address?.zipCASHe : '',
    name: address ? address?.name : '',
    number: address ? address?.number : '',
    addressId: address ? address?.addressId : '',
  });
  const [message, setMessage] = useState('');

  console.log("address", address)
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
    if (userData.data) {
      setCustomerId(userData.data.customerId); // Set customerId from user data
    }
  }, []);
  // const { handleAddressSelect, handleOrderSubmit} = useContext(AuthContext)

  const handleAddressSelect = (item) => {
    console.log('item', item)
    setFormData({
      ...item,
    })
  }


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
    if (userData.data) {
      setCustomerId(userData.data.customerId); // Set customerId from user data
    }
  }, []);

  const fetchAddressById = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
      console.log(userData, 'user')
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { access_token, addressId } = userData.data;
      console.log(addressId, 'addressID')

      const response = await fetch("https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getAddressByAddressId", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `${access_token}`,
        },
        body: JSON.stringify({ addressId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Address data fetched successfully:", data);
      setAddress(data.data)
    } catch (error) {
      console.error("Error fetching address data:", error);
    }
  };

  // ----------------getCustomerDataById----------------



  const fetchCustomerDataById = async (customerId) => {
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { access_token } = userData.data;


      const response = await fetch("https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getCustomerDataById", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `${access_token}`,
        },
        body: JSON.stringify({ customerId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Customer data fetched successfully:", data.data?.address);
      if (Array.isArray(data.data?.address)) {
        setCustomerData(data.data?.address);
      } else {
        throw new Error("Invalid customer data format received");
      }
      setAddressData(data.data);

    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };
  useEffect(() => {
    if (customerId) {
      fetchAddressById();
      fetchCustomerDataById(customerId);
    }
  }, [customerId]);

  const handleDelete = async (item) => {
    console.log(item?.addressId, 'item')
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
      const { access_token } = userData.data;

      const response = await fetch("https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/deleteAddressById", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': access_token,
        },
        body: JSON.stringify({ addressId: item?.addressId }),
      });

      if (!response.ok) {
        // Handle non-200 responses here
        throw new Error('Network response was not ok');
      }

      // Filter the customerData array based on the addressId
      setCustomerData(customerData.filter((address) => address.addressId !== item?.addressId));
      toast.success('Address deleted successfully');
    } catch (error) {
      console.error('Error deleting address:', error);
      toast.error('Error deleting address');
    }
  };

  const fetchCartData = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { customerId, access_token } = userData.data;
      console.log(customerId, 'id');

      const response = await fetch("https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getCart", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `${access_token}`,
        },
        body: JSON.stringify({ ...formData, customerId }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Cart data fetched successfully:", data);
      setCartData(data.data || []); // Assuming the API returns an object with cartItems
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };




  // const totalSalePrice = cartData?.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setRadioOptions(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { customerId, access_token } = userData.data;
      console.log(customerId, 'id');
      const response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/createAddress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `${access_token}`,
        },
        body: JSON.stringify({ ...formData, customerId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessage('Address saved successfully!');
      setAddress(data, 'create address')
      toast.success("Address saved successfully!");
      const newAddress = {
        addressId: data.addressId,
        name: formData.name,
        addressLine1: formData.addressLine1,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        landmark: formData.landmark,
        // zipcode: formData.zipcode,
        number: formData.number,
        pincode: formData.pincode,
      };

      setCustomerData((prevCustomerData) => ([...prevCustomerData, newAddress]))
      setFormData({
        ...formData,
        name: '',
        addressLine1: '',
        pincode: '',
        city: '',
        state: '',
        country: '',
        landmark: '',
        number: '',

      });
    } catch (error) {
      setMessage('Error saving address.');
      toast.error("Error saving address !");
      console.error('Error:', error);
      console.log(formData, 'formdata')
    }
  };

  console.log('first', formData)


  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      // Retrieve user data from localStorage
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");  
      // Validate form data
      const requiredFields = ['addressLine1', 'pincode', 'city', 'state', 'country', 'name', 'number', 'landmark'];
      for (const field of requiredFields) {
        if (!formData[field]) {
          toast.error(`Please fill out ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}.`);
          return;
        }
      }
  
      // Prepare order data
      const orderData = {
        customerId: userData.data.customerId,
        addressId: formData.addressId,
        paymentMethod: radioOptions, // Assuming radioOptions is defined elsewhere
        items: cartData.items.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
        // totalAmount: cartData.reduce((total, item) => total + item.totalSalePrice, 0), // Calculate total amount
      };
  
      // Send order request
      const response = await fetch(
        "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/orderSubmit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: userData.data.access_token,
          },
          body: JSON.stringify(orderData),
        }
      );
  
    
  
      // Process successful order placement
      const data = await response.json();
      toast.success("Order placed successfully!");
      setPopUp(true);
      setCartData([]); // Clear cart after successful order
  
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error placing order.");
    }
  };
  

  const handleOnlinePay = async () => {
    if (!formData || Object.keys(formData).length === 0) {
      toast.error("Please select an address.");
      return;
    }
    const requiredFields = ['addressLine1', 'pincode', 'city', 'state', 'country', 'name', 'number', 'landmark'];
    const emptyFields = requiredFields.filter(field => !formData[field]);

    console.log(emptyFields, 'empty')
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
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const options = {
        key: "rzp_test_fuOkanrFo8Ztyd",
        amount: '33333',
        currency: 'INR',
        name: `${formData?.name}`,
        description: " Transaction",
        image: "/logo.png",
        order_id: 'order_OIdp0EQmFOLWQK',
        prefill: {
          name: `${formData?.name}`,
          email: `${customerData[0].email}`,
          contact: `${formData.number}`,
        },
        notes: {
          address: `${formData.addressLine1}`,
        },
        theme: {
          color: "#acaf4c",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(address, "res")
  useEffect(() => {
    fetchCartData();
    // const addressId = "1b09a749-8294-4ada-879e-f99c8e33ca0f";
    fetchAddressById();
  }, []);


  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: address?.name || '',
      addressLine1: address?.addressLine1 || '',
      pincode: address?.pincode || '',
      city: address?.city || '',
      state: address?.state || '',
      country: address?.country || '',
      landmark: address?.landmark || '',
      // zipcode: address?.zipcode || '',
      number: address?.number || ''
    }));
  }, [address]);
  console.log(customerData, "custumer data")
  console.log(cartData, 'Order Details')
  console.log(address, 'address')
  return (
    <>

      <Header />

      <div className="z-20">
        <Image src={Grand} alt="" className="lg:h-[80vh] h-auto w-full" />
      </div>

      <section className="w-full bg-white">
   



   <div className="py-6 md:py-8 lg:py-10">
    <div className="flex m-0">
      <div className="w-2/5">
        <div className="container_checkOut" style={{ height: '100%' }}>
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="col-md-6">
                <div className="flex  gap-4">
                  <div className="w-1/2">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John M. Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="number">Phone</label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder="10-digit mobile number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <label htmlFor="addressLine1">
                  <i className="fa fa-address-card-o"></i> Address
                </label>
                <input
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  placeholder="542 W. 15th Street"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  required
                />
                <div className="flex  gap-4">
                  <div className="w-1/2">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      placeholder="Pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex  gap-4">
                  <div className="w-1/2">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      placeholder="India"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <div className="col-12">
                    <label htmlFor="landmark">Landmark</label>
                    <input
                      type="text"
                      id="landmark"
                      name="landmark"
                      placeholder="landmark"
                      value={formData.landmark}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <label>
              <input type="checkbox" name="sameadr" /> Shipping address same as billing
            </label>
            <button type="submit" id="pay-btn">Create And Save Address</button>
          </form>

          <div className="address-box">
            <div className="flex">
              {customerData.map((item, index) => (
                <div className="address-list col-lg-12" key={index}>
                  <DeleteForeverIcon className="delete-icon" onClick={() => handleDelete(item)} />
                  <hr />
                  <h3 className="address-head">SHIPPING ADDRESS</h3>
                  <div>
                    <hr />
                    <input type="radio" name="address" className="address-selector" onChange={() => handleAddressSelect(item)} />
                    <span>{item.name} </span>
                    <p>{item.addressLine1}</p>
                    <p>{item.city} , {item.state}, {item.pincode}</p>
                    <p>{item.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/3  ml-[300px]">
        <div className="container_checkOut">
          <h4 className="font-medium">
            Products{" "}
            <span className="price" style={{ color: "black" }}>
              <b>{cartData.length}</b>
            </span>
          </h4>
          <br />
          {cartData && cartData.items?.length > 0 ? (
            cartData.items.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <Image
                  style={{ width: "8%" }}
                  src={garamMasala}
                  alt={item.productName}
                  width={50}
                  height={50}
                />
                <div style={{ display: 'flex' }}>
                  <p>{item.ProductName} : {item.quantity} x {item.value}</p>
                </div>
                <div>
                <p className="price">
          <span style={{ textDecorationLine: 'line-through' }}>Rs. {item.maxPrice}</span> <span>Rs. {item.price}</span>
        </p>
                </div>
              </div>
            ))
          ) : (
            <p>No products in cart</p>
          )}
          <br />
          <hr />
          <br />
          <div className="flex item-center justify-between">
            <div>
              <p>Total Price</p>
            </div>
            <div>
              <p>Rs. {cartData.totalPrice}</p>
            </div>
            
          </div>
          <div className="flex item-center justify-between">
            <div>
              <p>Discount</p>
            </div>
            <div>
              <p>{cartData.discount}</p>
            </div>
            
          </div>
          <div className="flex item-center justify-between">
            <div>
              <p>Sub Total</p>
            </div>
            <div>
              <p>Rs. {cartData.totalSalePrice}</p>
            </div>
            
          </div>
          <div className="flex item-center justify-between">
            <div>
              <p>Shipping charge</p>
            </div>
            <div>
              <p> + {cartData.deliveryCharge}</p>
            </div>
          </div>
  
          <p className="font-medium">
            Grand Total{" "}
            <span className="price" style={{ color: "black" }}>
              <b>Rs. {cartData.totalSalePrice}</b>
            </span>
          </p>
        </div>
        <div className="container_checkOut" style={{ marginTop: '50px' }}>
          <h4 className="font-medium">
            Shipping method
          </h4>
          <div className="mainContainer">
            <div className="card">
              <div className="payments-container">
                <div className="payments-wrapper">
                  <label>
                    <input
                      type="radio"
                      value="Razorpay"
                      name="paymentMethod"
                      className="form-check-input"
                      checked={radioOptions === "Razorpay"}
                      onChange={handleRadioChange}
                    />
                    Online Payment
                  </label>
                </div>
                <div className="payments-wrapper">
                  <label>
                    <input
                      type="radio"
                      value="COD"
                      name="paymentMethod"
                      checked={radioOptions === "COD"}
                      onChange={handleRadioChange}
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>
              {radioOptions === "Razorpay" ? (
                <button id="pay-btn" onClick={handleOnlinePay}>Pay now</button>
              ) : (
                <form onSubmit={handleOrderSubmit}>
                  <button id="pay-btn" type="submit">Place Order</button>
                </form>
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
</section>

    </>

  );
};

export default Shop;
