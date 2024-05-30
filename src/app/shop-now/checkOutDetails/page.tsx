"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Grand from "@Images/slider/spices.jpeg";
import "./style.css";
import TurmericPowder from "@Images/ProductImages/turmericpowder.png";
import { CartContext } from "@/Context/CartContext";

const Shop = () => {
  const [checkOut, setCheckOut] = useState([]);
  const { cart } = useContext(CartContext);
  const {count} = useContext(CartContext)
  const [varient, setVariant] = useState([])

  // Debugging log
  console.log(cart, 'newData');

  // Calculate the total sale price
  const totalSalePrice = cart.reduce((total, item) => total + item.sale_price, 0);
  const quantityValue = cart.map((product)=> product.Variant)
  console.log(quantityValue)
  


  useEffect(() => {
    const varientData = cart.map((product) => product.Variant);
    setCheckOut(varientData);
    console.log(varientData, "check out varient data");
  }, [cart]);
  
  useEffect(() => {
    const productVarient = cart.map((product) => product.Variant);
    setVariant(...productVarient);
    console.log(productVarient,"productVarient")
  }, [cart]);



  console.log(checkOut, "checkouT list ");

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
                  <input type="button" value="Buy Now" className="btn" />
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
                        <p></p>
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
                        <p style={{ textDecoration: "line-through" }}>Rs. {quantityValue.saleAmount}</p>
                        <span className="price">Rs. {item.sale_price}</span>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
