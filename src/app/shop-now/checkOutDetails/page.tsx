"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Grand from "@Images/slider/spices.jpeg";
import "./style.css";
import TurmericPowder from "@Images/ProductImages/turmericpowder.png";
import { CartContext } from "@/Context/CartContext";


const Shop = () => {
  const { cart } = useContext(CartContext);

  // Debugging log
  console.log(cart, 'newData');

  // Calculate the total sale price
  const totalSalePrice = cart.reduce((total, item) => total + item.variant.saleAmount * item.quantity, 0);
  
  useEffect(() => {
    const varientData = cart.map((product) => product.variant);
    console.log(varientData, "check out varient data");
  }, [cart]);
  
  console.log(cart, "checkout list ");
    const [radioOptions, setRadioOptions] = useState("Razorpay");

  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setRadioOptions(e.target.value);
  };

  return (
    <>
      <div className="z-20">
        <Image src={Grand} alt="" className="lg:h-[80vh] h-auto w-full" />
      </div>

      <section className="w-full bg-white">
        <div className="py-6 md:py-8 lg:py-10">
          <div className="row">
            <div className="col-75">
              <div className="container_checkOut">
                <form action="/action_page.php">
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="fname">
                        <i className="fa fa-user"></i> Full Name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="John M. Doe"
                      />
                      <label htmlFor="email">
                        <i className="fa fa-envelope"></i> Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                      />
                      <label htmlFor="adr">
                        <i className="fa fa-address-card-o"></i> Address
                      </label>
                      <input
                        type="text"
                        id="adr"
                        name="address"
                        placeholder="542 W. 15th Street"
                      />
                      <label htmlFor="city">
                        <i className="fa fa-institution"></i> City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                      />
                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="state">State</label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="NY"
                          />
                        </div>
                        <div className="col-50">
                          <label htmlFor="zip">Zip</label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder="10001"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <label>
                    <input type="checkbox" name="sameadr" /> Shipping address
                    same as billing
                  </label>
                </form>
              </div>
            </div>
            <div className="col-25">
              <div className="container_checkOut">
                <h4 className="font-medium">
                  Products{" "}
                  <span className="price" style={{ color: "black" }}>
                    <b>{cart.length}</b>
                  </span>
                </h4>
                <br />
                {cart && cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <Image
                        style={{ width: "8%" }}
                        src={item.ProductImage}
                        alt="img"
                      />
                      <div style={{display: 'flex'}}>
                        <p>{item.productName} : {item.quantity} x {item.variant.Value}</p>
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
                        <p style={{ textDecoration: "line-through" }}>Rs. {item.variant.amount}</p>
                        <span className="price">Rs. {item.variant.saleAmount}</span>
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
              <div className="container_checkOut" style={{marginTop: '50px'}}>
                <h4 className="font-medium">
                Shipping method{" "}
                <div className="mainContainer">
        <div className="user-list"></div>
        <div className="card">
      
          <div className="inputWithIcon">
         
          </div>
          <div className="flex">
          
          </div>


          <div className="payments-container">
          
            <div className="payments-wrapper">
              <div>
                <label>
                  <input
                    type="radio"
                    value="Razorpay"
                    checked={radioOptions === "Razorpay"}
                    onChange={handleRadioChange}
                  />
                Online
                </label>
              </div>

              <div className="upi-images">
               
              </div>
            </div>

   
            <div className="payments-wrapper">
             
              <div className="upi-images">
                {/* <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/dcdfe7e1d5626b0a1dda.svg"
                  alt="upi"
                />
                <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg"
                  alt="upi"
                />
                <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/5e3b05b68f3d31b87e84.svg"
                  alt="upi"
                />
                <img
                  src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/fe904f1307590b94f8e6.svg"
                  alt="upi"
                /> */}
            
              </div>
           
            </div>
         

            <div className="payments-wrapper">
              <div>
                <label>
                  <input
                    type="radio"
                    value="CashOnDelivery"
                    checked={radioOptions === "CashOnDelivery"}
                    onChange={handleRadioChange}
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>

      
          </div>
         
         
          <button id="pay-btn">Pay now</button>
        </div>
        <div className="user-list"></div>
      </div>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
