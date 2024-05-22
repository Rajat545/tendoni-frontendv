"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Grand from "@Images/slider/spices.jpeg";
import { useRouter } from "next/navigation";

const Shop = () => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  // ------  QUANTITY---------

  const quantities = ["Select Quantity", "500gm", "200gm", "100gm", "50gm"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getAllSpicesProduct');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let result = await response.json();
        setData(result.data);  // Use result.data instead of result
        console.log("result", result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const incrementCount = () => {
    setCount(count + 1); // Increment count by 1
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1); // Decrement count by 1, but keep it minimum 1
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    // Allow scrolling on the background page when the popup is closed
    document.body.style.overflow = "auto";
    // Restore the header display
    document.querySelector("header").style.display = "block";
  };

  const openPopup = () => {
    setShowPopup(true);
    // Prevent scrolling on the background page
    document.body.style.overflow = "hidden";
    // Hide the header
    document.querySelector("header").style.display = "none";
  };

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: count }]);
    console.log("Cart updated:", [...cart, { ...item, quantity: count }]);
  };
  const productById = (id) => {
    console.log("click")
    const result = data.find((item) => item.id === id);
    console.log("ID", result)
  }

  return (
    <>
      <div className="z-20">
        <Image
          src={Grand}
          alt=""
          className="lg:h-[80vh] h-auto w-full"
        />
      </div>
      <div>
        <section className="w-full bg-white">
          <div className="py-6 md:py-8 lg:py-10">
            <div className="lg:flex justify-center md:mx-4 gap-2 flex-wrap">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="w-full my-4 sm:w-1/2 md:w-1/3 lg:w-1/4 p-0 sm:p-4 lg:p-4 flex-shrink-0"
                  style={{ display: "flex", justifyContent: "center", gap: 4 }}
                >
                  <div
                    className="item web branding"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      border: "1px solid #ccc",
                      padding: "20px",
                      borderRadius: "5px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "8px",
                      }}
                    >
                      <Image
                        src={item?.imgSrc}
                        className="lazyload img-fluid fixed-image-main"
                        alt="Images"
                        width={200}
                        height={200}
                        onClick={() => productById(item.id)}
                      />
                    </div>
                    <div
                      className="absolute top-[-6px] right-[-6px] bg-yellow-500 text-white px-2 py-1 m-2 rounded"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      {Math.floor(item.discount)}% Off
                    </div>
                    <div>
                      <a href="/shop-now/ProductDetails">
                        <h4 style={{ textAlign: "center" }}>{item.productName}</h4>
                        <div style={{ display: "flex", gap: "20px" }}>
                          <div>
                            <div
                              style={{
                                border: "1px solid rgb(0 0 0 / 64%)",
                                height: "fit-content",
                                position: "relative",
                                top: "15px",
                                width: "100%",
                              }}
                            ></div>
                            <h4 style={{ color: "rgb(0 0 0 / 64%)" }}>
                              Price: {item.sale_price}
                            </h4>
                          </div>
                          <div>
                            <h4 style={{ marginBottom: "20px" }}>Price: {item.price}</h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "8px" }}>
                      <button
                        onClick={() => {
                          addToCart(item);
                          openPopup();
                        }}
                        className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {showPopup && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex justify-end items-center"
            onClick={closePopup}
          >
            <div
              style={{ width: "50%" }}
              className="bg-white p-8 max-w-md h-screen fixed right-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2 className="text-xl font-semibold">Your Cart {cart.length}</h2>
                </div>
                <div>
                  <button
                    className="hover:bg-yellow-700 text-gray py-2 px-3 font-bold rounded"
                    onClick={closePopup}
                  >
                    X
                  </button>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid gray",
                }}
              >
                <div>
                  <p className="mt-5">Product</p>
                </div>
                <div>
                  <p className="mt-5">Total</p>
                </div>
              </div>

              {/* ----Cart---- */}
              {cart?.map((item, index) => (
                <div
                  key={index}
                  className="mt-5"
                  style={{ display: "flex", alignItems: "center", gap: "24%" }}
                >
                  <img
                    className="lg:w-1/6 imgWidth"
                    src="/images/ProductImages/turmericpowder.png"
                    alt=""
                  />
                  <div>
                    <a href="">
                      <p>{item.productName}</p>
                    </a>
                    <div
                      style={{
                        border: "1px solid #ccc",
                        height: "fit-content",
                        position: "relative",
                        top: "15px",
                        width: "60%",
                      }}
                    ></div>
                    <p style={{ color: "#ccc" }}>Rs. {item.sale_price}</p>
                    <p className="mt-3">Quantity: {item.quantity}</p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
        <div>
          <h3>Available Quantity</h3>
        </div>
        <select
          name="quantity"
          id="quantity"
          style={{
            border: "1px solid black",
            padding: "5px",
            width: "40%",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
          // Add value and onChange to manage selected quantity
          value={item.quantity}
          onChange={(e) => {
            const newCart = [...cart];
            newCart[index].quantity = e.target.value;
            setCart(newCart);
          }}
        >
          {quantities.map((quantity, index) => (
            <option key={index} value={quantity}>
              {quantity}
            </option>
          ))}
        </select>
      </ul>
                  </div>
                  <div>
                    <p style={{ color: "#ccc" }}>Rs. {item.sale_price * item.quantity}</p>
                  </div>
                  <div>
                    
                  </div>


                </div>

              ))}

              <div
                className="mt-3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    border: "1px solid black",
                    width: "30%",
                    justifyContent: "center",
                    padding: "6px",
                    borderRadius: "5px",
                  }}
                >
                  <div>
                    <button onClick={decrementCount}>
                      <h1>-</h1>
                    </button>
                  </div>
                  <div>{count}</div>
                  <div>
                    <button onClick={incrementCount}>
                      <h1>+</h1>
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={decrementCount}
                    style={{ marginLeft: "10px", color: "red" }}
                  >
                    <h1>Delete</h1>
                  </button>
                </div>
              </div>
              <div
                className="mt-5"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid gray",
                  paddingTop: "10px",
                }}
              >
                <div>
                  <p>Estimate Total</p>
                </div>
                <div>
                  <p>Rs: {cart.reduce((total, item) => total + item.sale_price * item.quantity, 0)}</p>
                </div>
              </div>
              <div
                className="mt-5"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <button
                    style={{ padding: "10px 100px" }}
                    className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push("/shop-now/checkOutDetails")}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
