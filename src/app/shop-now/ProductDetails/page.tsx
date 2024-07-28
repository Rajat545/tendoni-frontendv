"use client";
import Image from "next/image";
import Grand from "@Images/slider/spices.jpeg";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../../../Context/CartContext";
import { isAuth } from "../../../Context/AuthContext";
import ScrollAnimation from "../../../utils/ScrollAnimation";
import ReactImageMagnify from 'react-image-magnify';

const ProductDetails = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState({
    valueId: "",
    Value: "",
    amount: 0,
    saleAmount: 0,
  });
  const {
    productId,
    data,
    cart,
    count,
    setCart,
    setCount,
    variant,
    setVariant,
    buyProduct,
  } = useContext(CartContext);
  const productDetails = data.filter((item) => item.productId === productId);
  const productInCart = cart.find((item) => item.productId === productId);
  const quantityData =
    productDetails.length > 0 ? productDetails[0].Variant : [];
  const variantPrice = quantity?.saleAmount;
  const variantValue = quantity?.Value;
  const incrementCount = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  const decrementCount = (productId) => {
    setCart((cart) =>
      cart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };
  useEffect(() => {
    const productInCart = cart.find((item) => item.productId === productId);
    if (productInCart) {
      setCount(productInCart.quantity);
    }
  }, [cart, productId, setCount]);
  const openPopup = () => {
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };
  const deleteById2 = (productId) => {
    const deleteData = cart.filter((item) => item.productId !== productId);
    setCart(deleteData);
    toast.error("Removed from cart");
  };
  const addToCart = async (item, name) => {
    console.log(item, "item");
    if (!quantity?.valueId || !quantity.Value) {
      toast.error("Please Select Quantity");
      return;
    }
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.productId === item.productId
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      await setCart(updatedCart);
      toast.success("Added to cart successfully!");
      if (name === "buy") {
        handleCheckOut(updatedCart);
      }
    } else {
      const defaultVariant = {
        valueId: quantity.valueId,
        Value: quantity.Value,
        amount: quantity.amount,
        saleAmount: variantPrice,
      };
      const newItem = { ...item, quantity: 1, variant: defaultVariant };
      await setCart((prevCart) => [...prevCart, newItem]);
      toast.success("Added to cart successfully!");
      if (name === "buy") {
        handleCheckOut([...cart, newItem]);
      }
    }
  };
  const handleVariantChange = (e) => {
    const selectedVariantId = e.target.value;
    const selectedVariant = quantityData.find(
      (v) => v.valueId === selectedVariantId
    );
    setQuantity(selectedVariant);
  };
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + variantPrice * item.quantity,
      0
    );
  };
  const fetchProductById = async (productId) => {
    try {
      const url = `https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getProductById/${productId}`;
      const response = await fetch(url);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }
      const product = await response.json();
      if (!product.data) {
        console.error("No data found in the API response", product);
        throw new Error("No data found in the API response");
      }
      return product.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  const handleCheckOut = async (updatedCart) => {
    if (Object.keys(quantity).length === 0) {
      toast.error("Please Select quantity");
      return;
    }
    const isAuthnticate = isAuth();
    if (!isAuthnticate) {
      router.push("/login");
      return;
    }
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      if (!userData.data) {
        throw new Error("User data not found");
      }
      try {
        const { customerId, access_token } = userData.data;
        const items = updatedCart.map((item) => ({
          productId: item.productId,
          productName: item.productName,
          variantId: item.variant.valueId,
          valueId: item.variant.valueId,
          quantity: item.quantity,
          price: item.variant.saleAmount,
          maxPrice: item.variant.amount,
        }));
        const payload = {
          customerId,
          items,
        };
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `${access_token}`,
          },
          body: JSON.stringify(payload),
        };
        const response = await fetch(
          "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/addToCart",
          requestOptions
        );
        const data = await response.json();
        if (response.status === 200) {
          toast.success("Product added to cart successfully!");
          router.push("/shop-now/checkOutDetails");
        } else {
          toast.error("Failed to add product to cart! Please try again.");
        }
        setCart([]);
      } catch (error) {
        toast.error("Failed to complete checkout! Please try again.");
      }
    }
  };
  return (
    <>
      <Toaster />
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
            className={`${
              index % 2 === 0 ? "py-6 md:py-8 lg:py-10" : "bg-stone-300 py-6 md:py-8 lg:py-14"
            }`}
          >
            <div className="flex flex-col max-w-7xl items-center mx-auto px-4 md:flex-row">
              <div
                className={`relative w-full max-w-md px-4 md:w-1/2 md:max-w-none lg:mb-0 ${
                  index % 2 === 0 ? "order-first" : ""
                }`}
              >
                <ReactImageMagnify
                  smallImage={{
                    alt: "MasalaImage",
                    isFluidWidth: true,
                    src: selectedImage || item.productImages,
                    width: 504,
                    height: 504,
                  }}
                  largeImage={{
                    src: selectedImage || item.productImages,
                    width: 2000,
                    height: 900,
                  }}
                />
                <div className="flex mt-5 space-x-2">
                  {[...Array(4)].map((_, idx) => (
                    <div key={idx} className="w-20 h-20 overflow-hidden">
                      <Image
                        src={item.productImages}
                        alt="Image"
                        className="object-contain cursor-pointer"
                        width={80}
                        height={80}
                        onClick={() => setSelectedImage(item.productImages)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`w-full md:w-1/2 md:pl-10 ${
                  index % 2 !== 0 ? "md:order-first" : ""
                }`}
              >
                <h2 className="text-xl font-semibold lg:text-3xl md:text-2xl">
                  {item.productName}
                </h2>
                <p className="py-3 md:pt-4 md:pb-8 text-gray-700 text-sm md:text-base lg:text-lg">
                  <div>
                    <h5>
                      <span className="line-through">
                        {quantity?.amount ? `RS ${quantity.amount}` : ""}{" "}
                      </span>
                      {quantity?.saleAmount ? `Rs: ${quantity.saleAmount}` : "Select Item"}
                    </h5>
                  </div>
                  <div>
                    <h5>Shipping Charge: Rs. 6.50</h5>
                  </div>
                </p>
                <div className="mb-4">
                  <h3>Available Quantity</h3>
                  <select
                    name="quantity"
                    id="quantity"
                    className="border border-black p-2 w-40 mb-4 rounded-md"
                    value={quantity?.valueId}
                    onChange={handleVariantChange}
                  >
                    <option value="null">Select quantity</option>
                    {quantityData?.map((variant) => (
                      <option key={variant.valueId} value={variant.valueId}>
                        {variant.Value}
                      </option>
                    ))}
                  </select>
                </div>
                {productInCart ? (
                  <div>
                    <div className="flex gap-4 items-center border border-black w-40 p-2 rounded-md">
                      <button onClick={() => decrementCount(item.productId)}>
                        <h1>-</h1>
                      </button>
                      <div>{count}</div>
                      <button onClick={() => incrementCount(item.productId)}>
                        <h1>+</h1>
                      </button>
                    </div>
                    <button
                      onClick={openPopup}
                      className="bg-yellow-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      View Cart
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-4 items-center mt-4">
                    <button
                      onClick={() => {
                        addToCart(item, "add");
                        openPopup();
                      }}
                      className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => addToCart(item, "buy")}
                      className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Buy Now
                    </button>
                  </div>
                )}
                <p className="py-3 md:pt-4 md:pb-8 text-gray-700 text-sm md:text-base lg:text-lg">
                {item.description}
                </p>
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
              style={{
                width: "50%",
                overflow: "scroll",
                marginTop: "140px",
                paddingBottom: "100px",
              }}
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
                  <Image
                    className="lg:w-1/6 imgWidth"
                    src={item.productImages}
                    alt=""
                    width={200}
                    height={200}
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
                    <p style={{ textDecoration: "line-through" }}>
                      {" "}
                      Rs{quantity.amount}
                    </p>
                    <p className="mt-3" style={{ width: "150px" }}>
                      Quantity: ({item.quantity}) {variantValue}
                    </p>
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
                    <p style={{ marginLeft: "-42px" }}>Rs</p>
                    <p style={{ marginLeft: "-42px" }}>{variantPrice}</p>
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
                    <button onClick={() => decrementCount(productId)}>
                      <h1>-</h1>
                    </button>
                  </div>
                  <div>{count}</div>
                  <div>
                    <button onClick={() => incrementCount(productId)}>
                      <h1>+</h1>
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={decrementCount}
                    style={{ marginLeft: "10px", color: "red" }}
                  >
                    <h1 onClick={() => deleteById2(productId)}>Remove</h1>
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
                    onClick={() => handleCheckOut(cart)}
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
