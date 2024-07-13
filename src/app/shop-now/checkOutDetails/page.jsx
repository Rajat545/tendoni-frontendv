"use client";;
import { useEffect, useState } from "react";
import Image from "next/image";
import Grand from "@Images/slider/spices.jpeg";
import "./style.css";
import Header from "@/components/Header";
import toast, { Toaster } from "react-hot-toast";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import OrderSuccessFull from "../OrderSuccessFull/page";
import Modal from "react-modal";
import { useRouter } from "next/navigation";
// Modal.setAppElement('#__next');
const Shop = () => {
  const router = useRouter();
  const [popUp, setPopUp] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [cartData, setCartData] = useState("");
  const [customerData, setCustomerData] = useState([]);
  const { addressData, setAddressData } = useState([]);
  const [radioOptions, setRadioOptions] = useState("Razorpay");
  const [newAddress, setNewAddress] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState([]);
  const [address, setAddress] = useState();
  const [formData, setFormData] = useState({
    addressLine1: address ? address?.addressLine1 : "",
    pinCode: address ? address?.pinCode : "",
    city: address ? address?.city : "",
    state: address ? address?.state : "",
    country: address ? address?.country : "",
    landmark: address ? address?.landmark : "",
    name: address ? address?.name : "",
    number: address ? address?.number : "",
    addressId: address ? address?.addressId : "",
  });
  const [message, setMessage] = useState("");
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
    if (userData.data) {
      setCustomerId(userData.data.customerId); // Set customerId from user data
    }
  }, []);
  const handleAddressSelect = (item) => {
    setFormData({
      ...item,
    });
  };
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
    if (userData.data) {
      setCustomerId(userData.data.customerId); // Set customerId from user data
    }
  }, []);
  const fetchAddressById = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { access_token, addressId } = userData.data;
      const response = await fetch(
        "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getAddressByAddressId",
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
    } catch (error) {
      toast.error("Error fetching address data:");
    }
  };
  // ----------------getCustomerDataById----------------
  const fetchCustomerDataById = async (customerId) => {
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { access_token } = userData.data;
      const response = await fetch(
        "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getCustomerDataById",
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
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      const { access_token } = userData.data;
      const response = await fetch(
        "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/deleteAddressById",
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
        customerData.filter((address) => address.addressId !== item?.addressId)
      );
      toast.success("Address deleted successfully");
    } catch (error) {
      toast.error("Error deleting address");
    }
  };
  const fetchCartData = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { customerId, access_token } = userData.data;
      const response = await fetch(
        "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getCart",
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
    } catch (error) {
      toast.error("Error fetching cart data:", error);
    }
  };
  const handleRadioChange = (e) => {
    setRadioOptions(e.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { customerId, access_token } = userData.data;
      const response = await fetch(
        "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/createAddress",
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
      setMessage("Address saved successfully!");
      // setAddress(data, "create address");
      setAddress(data.data)
      
      
      toast.success('New Address stored sucessfully');
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
      setCustomerData((prevCustomerData) => [...prevCustomerData, newAddress]);
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
    } catch (error) {
      setMessage("Error saving address.");
      toast.error("Error saving address !", error);
    }
  };
  
  const amount = Math.round(cartData?.finaltotalPrice * 100);
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
        customerId: userData.data.customerId,
        addressId: address?.addressId,
        paymentMethod: radioOptions,
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
      const data = await response.json();
      toast.success("Order placed successfully!");
      setPopUp(true);
      setCartData([]);
      setTimeout(() => {
        router.push('/shop-now');
        setTimeout(() => {
          window.location.reload();
        }, 1000); 
      }, 0);
    } catch (error) {
      toast.error("Error placing order.", error);
    }
  };
  // 
  // -------------------createPaymentOrder  SPI ----------
  const createPaymentOrder = async (amount, name) => {
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (!userData.data || !userData.data.access_token) {
        throw new Error("User data not found or access token missing");
      }
      const { access_token } = userData.data;
      const response = await fetch(
        "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/CreatePaymentData",
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
        id: data.id, // Assuming 'id' is the field name for order ID in your API response
        amount: data.amount,
      };
    } catch (error) {
      toast.error("Error creating payment order:", error.message);
      throw error;
    }
  };
  const verifyPayment = async (payment_id, order_id, signature) => {
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (!userData.data || !userData.data.access_token) {
        throw new Error("User data not found or access token missing");
      }
      const { access_token } = userData.data;
      const response = await fetch(
        "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/verifyPayment",
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
          } catch (error) {
            toast.error("Error verifying payment!");
          }
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
    fetchAddressById();
  }, []);
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: address?.name || "",
      addressLine1: address?.addressLine1 || "",
      pincode: address?.pincode || "",
      city: address?.city || "",
      state: address?.state || "",
      country: address?.country || "",
      landmark: address?.landmark || "",
      // zipcode: address?.zipcode || '',
      number: address?.number || "",
    }));
  }, [address]);
  //  -----------------RemoveItem API --------- //
  const removeItem = async (cartId, itemId) => {
    try {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { access_token } = userData.data;
      const response = await fetch(
        "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/removeSingleCartItem",
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
      // router.push("/shop-now");
      toast.success(updateCart.message);
    } catch (error) {
      toast.error("Error removing item");
    }
  };
  return (
    <>
      <Header />
    <div className="z-20">
        <Image src={Grand} alt="" className="lg:h-[80vh] h-auto w-full" />
      </div>
      <section className="w-full bg-white">
        <div className="py-6 md:py-8 lg:py-10">
          <div id="responsive-dev" className="flex m-0">
            <div id="responsive-container" className="w-[50%]">
              <div className="container_checkOut ml-[55px]" style={{ height: "100%" }}>
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
                            type="type"
                            id="pincode"
                            name="pincode"
                            placeholder="Pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            maxLength={6}
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
                    <input type="checkbox" name="sameadr" /> Shipping address
                    same as billing
                  </label>
                  <button type="submit" id="pay-btn">
                    Create And Save Address
                  </button>
                </form>
                <div className="address-box">
                  <div className="flex flex-wrap">
                    {customerData.map((item, index) => (
                      <div
                        className="address-list col-lg-6 md:col-lg-2 sm:col-lg-2"
                        key={index}
                      >
                        <DeleteForeverIcon
                          className="delete-icon"
                          onClick={() => handleDelete(item)}
                        />
                        <hr />
                        <h3 className="address-head p-2">SHIPPING ADDRESS</h3>
                        <div>
                          <hr />
                          <input
                            type="radio"
                            name="address"
                            className="address-selector"
                            onChange={() => handleAddressSelect(item)}
                          />
                          <span>{item.name} </span>
                          <p>{item.addressLine1}</p>
                          <p>
                            {item.city} , {item.state}, {item.pincode}
                          </p>
                          <p>{item.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div id="responsive-price" className=" w-[44.333333%]  ml-[40px]">
              <div className="container_checkOut">
                <h4 className="font-medium">
                  Products{" "}
                  <span className="price" style={{ color: "black" }}>
                    <b>{cartData.length}</b>
                  </span>
                </h4>
                <br />
                {cartData.items?.length > 0 ? (
                  cartData.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <img
                        style={{ width: "8%" }}
                        src={item.ProductImage}
                        alt={item.productName}
                        width={50}
                        height={50}
                      />
                      <div style={{ display: "flex" }}>
                        <p>
                          {item.ProductName} : {item.quantity} x {item.value}
                        </p>
                      </div>
                      <div>
                        <p className="price">
                          <span style={{ textDecorationLine: "line-through" }}>
                            Rs. {item.maxPrice}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="price">Rs. {item.price}</p>
                      </div>
                      <div>
                        <p className="cursor-pointer">
                          <svg
                            class="h-6 w-6 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => removeItem(item.cartId, item.itemId)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
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
                    <p>Total MRP</p>
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
                    <p>{(cartData.discount)}</p>
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
                    <b>Rs. {cartData.finaltotalPrice}</b>
                  </span>
                </p>
              </div>
              <div className="container_checkOut" style={{ marginTop: "50px" }}>
                <h4 className="font-medium">Shipping method</h4>
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
                      <button id="pay-btn" onClick={handleOnlinePay}>
                        Pay now
                      </button>
                    ) : (
                        <button onClick={handleOrderSubmit} id="pay-btn" type="submit">
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
