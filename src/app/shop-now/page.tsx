"use client";
import React from "react";
import Image from "next/image";
import { ShopProducts } from "@/Data/shop-now";
import Grand from "@Images/slider/spices.jpeg";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Shop = () => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const incrementCount = () => {
    setCount(count + 1); // Increment count by 1
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1); // Decrement count by 1, but keep it minimum 1
    }
  };

  const [originalHeaderDisplay, setOriginalHeaderDisplay] = useState("block");

  const closePopup = () => {
    setShowPopup(false);
    // Allow scrolling on the background page when the popup is closed
    document.body.style.overflow = "auto";
    // Restore the header display
    document.querySelector("header").style.display = originalHeaderDisplay;
  };

  const openPopup = () => {
    setShowPopup(true);
    // Prevent scrolling on the background page
    document.body.style.overflow = "hidden";
    // Hide the header
    setOriginalHeaderDisplay(document.querySelector("header").style.display);
    document.querySelector("header").style.display = "none";
  };
  return (
    <>
      <div className=" z-20">
        <Image
          src={Grand}
          alt=""
          className="
          lg:h-[80vh] h-auto w-full"
        />
      </div>
      <div>
        <section className="w-full bg-white ">
          <div className="py-6 md:py-8 lg:py-10">
            <div className="lg:flex justify-center  md:mx-4 gap-2 flex-wrap ">
              {ShopProducts?.map((item, index) => (
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
                      />
                    </div>
                    <div
                      className="absolute top-[-6px] right-[-6px] bg-yellow-500 text-white px-2 py-1 m-2 rounded"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      20% Off{" "}
                      {/* Replace this with your actual discount value */}
                    </div>
                    <div>
                      <a href="/shop-now/ProductDetails">
                        <h4 style={{ textAlign: "center" }}>Product Name</h4>
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
                              Price: 490
                            </h4>
                          </div>
                          <div>
                            <h4 style={{ marginBottom: "20px" }}>Price: 400</h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "8px" }}>
                      <button
                        onClick={() => {
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
                  <h2 className="text-xl font-semibold">Your Cart</h2>
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
              <div
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
                    <p>Product Name</p>
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
                  <p style={{ color: "#ccc" }}>Rs. 400.0</p>
                  <p className="mt-3">Quantity: 400g</p>
                </div>
                <div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      height: "fit-content",
                      position: "relative",
                      top: "15px",
                      width: "60%",
                    }}
                  ></div>
                  <p style={{ color: "#ccc" }}>Rs.</p>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      height: "fit-content",
                      position: "relative",
                      top: "15px",
                      width: "60%",
                    }}
                  ></div>
                  <p style={{ color: "#ccc" }}>400</p>
                  <p>Rs.</p>
                  <p>400</p>
                </div>
              </div>
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
                  marginTop: "48vh",
                  borderTop: "1px solid gray",
                }}
              >
                <div>
                  <p>Estimate Total</p>
                </div>
                <div>
                  <p>Rs: 258.0</p>
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
