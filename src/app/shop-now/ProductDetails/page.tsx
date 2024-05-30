"use client";
import Image from "next/image";
import { ProductsDivision } from "@/Data/productDetails";
import ScrollAnimation from "@/utils/ScrollAnimation";
import Grand from "@Images/slider/spices.jpeg";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/Context/CartContext";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [originalHeaderDisplay, setOriginalHeaderDisplay] = useState("block");
  const [quantity, setQuantity] = useState({ valueId: "", Value: "", saleAmount: 0 });
  const { productId, data, cart, count, setCart, setCount, variant, setVariant } = useContext(CartContext);

  const productDetails = data.filter((item) => item.productId === productId);
  console.log(productDetails, "product details");
    const [total , setTotal]= useState('')
  console.log("variant", variant);

  console.log(data, 'data')

  // Extract variant data from productDetails
  const quantityData = productDetails.length > 0 ? productDetails[0].Variant : [];

  const variantPrice = quantity.saleAmount;
  const variantValue = quantity.Value
  
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const openPopup = () => {
    setShowPopup(true);
    setOriginalHeaderDisplay(document.querySelector("header").style.display);
    document.querySelector("header").style.display = "none";
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
    document.querySelector("header").style.display = originalHeaderDisplay;
  };
  
  const deleteById2 = (productId) => {
    const deleteData = cart.filter((item) => item.productId !== productId);
    setCart(deleteData);
    toast.error("Removed from cart");
  };

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.productId === item.productId);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const defaultVariant = {
        valueId: "1kg",
        Value: "1kg",
        amount: item.price,
        saleAmount: item.sale_price,
      };

      setCart((prevCart) => [
        ...prevCart,
        { ...item, quantity: 1, variant: defaultVariant },
      ]);
    }

    toast.success("Added to cart successfully!");
  };

  const handleVariantChange = (e) => {
    const selectedVariantId = e.target.value;
    const selectedVariant = quantityData.find(v => v.valueId === selectedVariantId);

    setQuantity(selectedVariant);
    console.log(selectedVariant, "selected variant");
  };
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + variantPrice * item.quantity, 0);
  };

  return (
    <>
      <ToastContainer />
      <div className="z-20">
        <Image src={Grand} alt="" className="lg:h-[80vh] h-auto w-full" />
      </div>
      <div>
        <section className="w-full bg-white">
          <div className="py-6 md:py-8 lg:py-10">
            {productDetails?.map((item, index) => (
              <ScrollAnimation key={index}>
                <section
                  key={index}
                  id={item?.sectionId}
                  className={`${index % 2 === 0
                    ? "py-6 md:py-8 lg:py-10"
                    : "bg-stone-300 py-6 md:py-8 lg:py-14"
                    }`}
                >
                  <div
                    key={index}
                    className={`box-border flex flex-col max-w-7xl items-center content-center px-4 md:px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row ${index % 2 === 0 ? "" : ""
                      }`}
                  >
                    <div style={{ maxWidth: "50%" }}>
                      <div
                        className={`flex justify-center box-border relative w-full max-w-md px-4 md:px-8 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10 ${index % 2 === 0 ? "order-first " : ""
                          }`}
                      >
                        <Image
                          src={item.ProductImage}
                          alt="Image"
                          style={{ height: "200px", width: "200px" }}
                        />
                      </div>
                      <div style={{ marginTop: "20px", display: "flex" }}>
                        <div
                          style={{
                            maxWidth: "20%",
                            marginRight: "-35px",
                            height: "fit-content",
                          }}
                          className={`box-border relative text-center bg-no-repeat bg-contain border-solid${index % 2 === 0 ? "order-first " : ""
                            }`}
                        >
                          <Image
                            src={item.ProductImage}
                            style={{ height: "200px", width: "200px" }}
                            alt="Image"
                            className="lg:w-1/2 imgWidth"
                          />
                        </div>
                        <div
                          style={{
                            maxWidth: "20%",
                            marginRight: "-35px",
                            height: "fit-content",
                          }}
                          className={` box-border relative bg-no-repeat bg-contain border-solid ${index % 2 === 0 ? "order-first " : ""
                            }`}
                        >
                          <Image
                            src={item.ProductImage}
                            style={{ height: "200px", width: "200px" }}
                            alt="Image"
                            className="lg:w-1/2 imgWidth"
                          />
                        </div>
                        <div
                          style={{
                            maxWidth: "20%",
                            marginRight: "-35px",
                            height: "fit-content",
                          }}
                          className={`box-border relative bg-no-repeat bg-contain border-solid ${index % 2 === 0 ? "order-first " : ""
                            }`}
                        >
                          <Image
                            src={item.ProductImage}
                            style={{ height: "200px", width: "200px" }}
                            alt="Image"
                            className="lg:w-1/2 imgWidth"
                          />
                        </div>
                        <div
                          style={{
                            maxWidth: "20%",
                            marginRight: "-35px",
                            height: "fit-content",
                          }}
                          className={`box-border relative bg-no-repeat bg-contain border-solid ${index % 2 === 0 ? "order-first " : ""
                            }`}
                        >
                          <Image
                            src={item.ProductImage}
                            style={{ height: "200px", width: "200px" }}
                            alt="Image"
                            className="lg:w-1/2 imgWidth"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`py-8 box-border text-wrap w-full text-black border-solid md:w-1/2 md:pl-10 ${index % 2 !== 0 ? "md:order-first" : ""
                        }`}
                    >
                      <h2 className="m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        {item.productName}
                      </h2>
                      <p className="py-3 md:pt-4 md:pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 text-sm md:text-base lg:text-lg">
                        <div>
                          <h5>Rs: {variantPrice}</h5>
                        </div>
                        <div>
                          <h5>Shipping Charge: Rs. 6.50</h5>
                        </div>
                      </p>
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
                          value={quantity.valueId}
                          onChange={handleVariantChange}
                        >
                      
                          {quantityData?.map((variant) => (
                            <option key={variant.valueId} value={variant.valueId}>
                              {variant.Value}
                            </option>
                          ))}
                        </select>
                        <div
                          style={{
                            display: "flex",
                            gap: "20px",
                            alignItems: "center",
                            border: "1px solid black",
                            width: "20%",
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
                        <div
                          style={{
                            display: "flex",
                            gap: "20px",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <div>
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
                          <div>
                            <button
                              onClick={() =>
                                router.push("/shop-now/checkOutDetails")
                              }
                              className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                        <p className="py-3 md:pt-4 md:pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 text-sm md:text-base lg:text-lg">
                          {item.description}
                        </p>
                      </ul>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>
            ))}
          </div>
        </section>
        {showPopup && cart.length > 0 && (
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
              {cart.map((item) => (
                <div
                  key={item.productId}
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
                        height: "fit-content",
                        position: "relative",
                        top: "15px",
                        width: "60%",
                      }}
                    ></div>
                    <p style={{textDecoration: 'line-through'}}> Rs{item.price}</p>
                    <p className="mt-3" style={{width: '150px'}}>Quantity: ({item.quantity}) {variantValue}</p>
                    
                  </div>
                  <div>
                    <div
                      style={{
                        height: "fit-content",
                        position: "relative",
                        top: "15px",
                        width: "60%",
                      }}
                    ></div>
                    <p style={{marginLeft: '-42px'}}>Rs</p>
                      <p style={{marginLeft: '-42px'}}>{variantPrice}</p>
                    
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
                    <h1   onClick={() => deleteById2(productId)}>Remove</h1>
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
                  <p>{calculateTotalPrice()}</p>
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

export default ProductDetails;
