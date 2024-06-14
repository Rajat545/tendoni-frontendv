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
  const [cartData, setCartData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const { addressData, setAddressData } = useState([])
  const [radioOptions, setRadioOptions] = useState("Razorpay");
  const [newAddress, setNewAddress] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState([]);
  const [address, setAddress] = useState('')
  const [formData, setFormData] = useState({
    addressLine1: address ? address?.addressLine1 : '',
    pincode: address ? address?.pincode : '',
    city: address ? address?.city : '',
    state: address ? address?.state : '',
    country: address ? address?.country : '',
    landmark: address ? address?.landmark : '',
    zipcode: address ? address?.zipcode : '',
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




  const totalSalePrice = cartData.reduce((total, item) => total + (item.price * item.quantity), 0);

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
        zipcode: formData.zipcode,
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
        zipcode: '',
      });
    } catch (error) {
      setMessage('Error saving address.');
      toast.error("Error saving address !");
      console.error('Error:', error);
      console.log(formData, 'formdata')
    }
  };


  // const handleOrderSubmit = async () => {
  //   try {
  //     const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
  //     if (!userData.data) {
  //       throw new Error("User data not found");
  //     }
  //     const { customerId, access_token } = userData.data;

  //     const orderData = {
  //       customerId,
  //       addressId: selectedAddress?.addressId,
  //       paymentMethod: radioOptions,
  //       items: cartData.map((item) => ({
  //         productId: item.productId,
  //         quantity: item.quantity,
  //       })),
  //       totalAmount: totalSalePrice,
  //     };

  //     const response = await fetch(
  //       "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/orderSubmit",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //           Authorization: `${access_token}`,
  //         },
  //         body: JSON.stringify(orderData),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     console.log("Order submitted successfully:", data);
  //     toast.success("Order submitted successfully!");

  //     // Clear the cart and reset state if necessary
  //     setCartData([]);
  //   } catch (error) {
  //     console.error("Error submitting order:", error);
  //     toast.error("Error submitting order.");
  //   }
  // };

  console.log('first', formData)

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { customerId, access_token } = userData.data;

      // Check if formData is null or any required fields are empty
      if (!formData || Object.keys(formData).length === 0) {
        toast.error("Please select an address.");
        return;
      }
      const requiredFields = ['addressLine1', 'pincode', 'city', 'state', 'country', 'name', 'number', 'zipcode', 'landmark'];
      const emptyFields = requiredFields.filter(field => !formData[field]);

      console.log(emptyFields, 'empty')
      if (emptyFields.length > 0) {
        toast.error("Please fill out all required fields.");
        return;
      }

      const orderData = {
        customerId,
        addressId: formData?.addressId,
        paymentMethod: radioOptions,
        items: cartData.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
        totalAmount: totalSalePrice,
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
      const data = await response.json();
      if (!response.ok) {
        toast.error("Error placing order.");
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      toast.success("Order placed successfully!");
      setPopUp(true);
      setCartData([]);
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
    const requiredFields = ['addressLine1', 'pincode', 'city', 'state', 'country', 'name', 'number', 'zipcode', 'landmark'];
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
        amount: `${totalSalePrice}`,
        currency: 'INR',
        name: `${formData?.name}`,
        description: " Transaction",
        image: "/logo.png",
        order_id: 'order_OIdp0EQmFOLWQK',
        prefill: {
          name: `${formData?.name}`,
          email: `${customerData.email}`,
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
      zipcode: address?.zipcode || '',
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
          <div className="row">
            <div className="col-75">
              <div className="container_checkOut" style={{ height: '100%' }}>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <div className="row">
                        <div className="col-50">
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
                        <div className="col-50">
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
                      <div className="row">
                        <div className="col-50">
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
                        <div className="col-50">
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
                      <div className="row">
                        <div className="col-50">
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
                        <div className="col-50">
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
                      <div className="row">
                        <div className="col-50">
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
                        <div className="col-50">
                          <label htmlFor="zipcode">Zipcode</label>
                          <input
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            placeholder="10001"
                            value={formData.zipcode}
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
                  <div className="row">
                    {customerData?.map((item, index) => (
                      <div className="address-list col-lg-12" key={index} style={{ marginRight: "20px" }}>
                        <DeleteForeverIcon className="delete-icon" onClick={() => handleDelete(item)} />
                        <hr />
                        <h3 className="address-head">New Address</h3>

                        <div>
                          <hr />
                          <input type="radio" name="address" className="address-selector" onChange={() => handleAddressSelect(item)

                          } />
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

            <div className="col-25">
              <div className="container_checkOut">
                <h4 className="font-medium">
                  Products{" "}
                  <span className="price" style={{ color: "black" }}>
                    <b>{cartData.length}</b>
                  </span>
                </h4>
                <br />
                {cartData && cartData.length > 0 ? (
                  cartData.map((item, index) => (
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
                        <div
                          style={{
                            height: "fit-content",
                            position: "relative",
                            top: "15px",
                            width: "100%",
                          }}
                        ></div>
                        {/* <p style={{ textDecoration: "line-through" }}>Rs. {item.variant.amount}</p> */}
                        <span className="price">Rs. {item.price}</span>
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
                    <p>Sub Total</p>
                  </div>
                  <div>
                    <p>Rs. {totalSalePrice}</p>
                  </div>
                </div>
                <div className="flex item-center justify-between">
                  <div>
                    <p>Shipping</p>
                  </div>
                  <div>
                    <p>Enter shipping address</p>
                  </div>
                </div>
                <div className="flex item-center justify-between">
                  <div>
                    <p>Estimated Taxes</p>
                  </div>
                  <div>
                    <p>Rs. 6.00</p>
                  </div>
                </div>
                <p className="font-medium">
                  Total{" "}
                  <span className="price" style={{ color: "black" }}>
                    <b>Rs. {totalSalePrice + 6.00}</b>
                  </span>
                </p>
              </div>
              <div className="container_checkOut" style={{ marginTop: '50px' }}>
                <h4 className="font-medium">
                  Shipping method{" "}
                  <div className="mainContainer">
                    <div className="user-list"></div>
                    <div className="card">
                      <div className="inputWithIcon"></div>
                      <div className="flex"></div>
                      <div className="payments-container">
                        <div className="payments-wrapper">
                          <div>
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
                          <div className="upi-images"></div>
                        </div>
                        <div className="payments-wrapper">
                          <div className="upi-images">
                            {/* Add your UPI images here if needed */}
                          </div>
                        </div>
                        <div className="payments-wrapper">
                          <div>
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
                      </div>
                      {radioOptions === "Razorpay" ? (
                        <button id="pay-btn" onClick={handleOnlinePay}>Pay now</button>

                      ) : (
                        <form onSubmit={handleOrderSubmit}>
                          <button id="pay-btn" type="submit">Place Order</button>
                        </form>)}
                    </div>
                  </div>
                </h4>
              </div>
              <>
                <Modal
                  isOpen={popUp}
                  onRequestClose={() => setPopUp(false)}
                  contentLabel="Order Success"
                  className="modal"
                  overlayClassName="modal-overlay"
                >
                  <OrderSuccessFull />
                </Modal>
              </>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Shop;
