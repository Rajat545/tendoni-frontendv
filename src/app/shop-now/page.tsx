"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Grand from "@Images/slider/spices.jpeg";
import { useRouter } from "next/navigation";
import { CartContext } from "@/Context/CartContext";
import { toast } from 'react-toastify';
import Header from "@/components/Header";
import { isAuth } from "@/Context/AuthContext";

const Shop = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState({});

  const { data,
    setCart,
    cart,
    count,
    setCount,
    setProductId,
    variant,
    showCartPopup,
    setShowCartPopup,
   

  } = useContext(CartContext);

  useEffect(() => {
    const productVariants = cart.reduce((acc, product) => {
      acc[product.productId] = product.variant?.valueId || "1kg";
      return acc;
    }, {});
    setSelectedVariants(productVariants);
  }, [cart]);

  const incrementCount = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementCount = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowCartPopup(false);
    document.body.style.overflow = "auto";
    document.querySelector("header").style.display = "block";
  };

  const openPopup = () => {
    setShowPopup(true);
    setShowCartPopup(true);
    document.body.style.overflow = "hidden";
    document.querySelector("header").style.display = "none";
  };

  const addToCartItem = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.productId === item.productId);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const defaultVariant = {
        valueId: "1kg", // Assuming the variant's ID for 1kg is "1kg"
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

  const productById = (id) => {
    setProductId(id);
    router.push('/shop-now/ProductDetails');
  };

  const deleteById = (productId) => {
    const deleteData = cart.filter((item) => item.productId !== productId);
    setCart(deleteData);
    toast.error("Removed from cart");
  };

  const handleVariantChange = (productId, value) => {
    const selectedVariant = variant.find(v => v.valueId === value);

    const newCart = cart.map(item => {
      if (item.productId === productId) {
        item.variant = selectedVariant;
      }
      return item;
    });
    setCart(newCart);
    setSelectedVariants(prevSelected => ({ ...prevSelected, [productId]: value }));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.variant.saleAmount * item.quantity, 0);
  };


  const isAuthnticate = isAuth()

  const handleCheckOut = async () => {
    const isAuthnticate = isAuth();
  
    if (!isAuthnticate) {
      router.push("/login");
      return;
    }
    try {
 
      const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
      const {customerId,access_token, name} = userData.data;
      console.log(access_token)
    
   
      const apiRequests = [];
    
     
      cart.forEach((item) => {
        const requestOptions = {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${access_token}`
          },
          body: JSON.stringify({ productId: item.productId, quantity: item.quantity })
        };
    
        
        apiRequests.push(
          fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/addToCart', requestOptions)
            .then(response => response.json())
            .then(data => {
              console.log(data,"new data")
              if (data.error) {
                toast.success('Product added to cart successfully!');
              } else {
                toast.error('Failed to add product  to cart! Please try again.')
              }
            })
            .catch(error => {
              console.error('Error adding product to cart:', error);
              toast.error('Failed to add product to cart! Please try again.');
            })
        );
      });
    

      await Promise.all(apiRequests);
    

      setCart([]);
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to complete checkout! Please try again.");
    }
  }

  return (
    <>
      <Header />
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
              {data?.map((item) => (
                <div
                  key={item.productId}
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
                    <div style={{ marginBottom: "8px" }}>
                      <Image
                        src={item?.ProductImage}
                        className="lazyload img-fluid fixed-image-main"
                        alt="Images"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div
                      className="absolute top-[-6px] right-[-6px] bg-yellow-500 text-white px-2 py-1 m-2 rounded"
                      style={{ fontSize: "12px" }}
                    >
                      {Math.floor(item.discount)}% Off
                    </div>
                    <div>
                      <h4 style={{ textAlign: "center" }} onClick={() => productById(item.productId)}>{item.productName}</h4>
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
                            Price: {item.price}
                          </h4>
                        </div>
                        <div>
                          <h4 style={{ marginBottom: "20px" }}>Price: {item.sale_price}</h4>
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "8px" }}>
                      <button
                        onClick={() => {
                          addToCartItem(item);
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

        {showCartPopup && cart.length > 0 && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex justify-end items-center"
            onClick={closePopup}
          >
            <div
              style={{ width: "50%", overflow: 'scroll', marginTop: '140px' }}
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
                  <h2 className="text-xl font-semibold">Your Cart ({cart.length})</h2>
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

              {cart.map((item, index) => (
                <div key={item.productId} style={{ maxHeight: "400px" }}>
                  <div
                    className="mt-5"
                    style={{ display: "flex", alignItems: "center", gap: "24%" }}
                  >
                    <Image
                      className="lg:w-1/6 imgWidth"
                      src={item?.ProductImage}
                      alt="image"
                    />
                    <div style={{ width: '84px' }}>
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
                      <p style={{ textDecoration: 'line-through' }}>Rs. {item.variant?.amount}</p>
                      <p className="mt-3" style={{ width: '150px' }}>Quantity ({item.quantity})  {item.variant?.Value}</p>
                    </div>
                    <div>
                      {item.variant?.saleAmount !== 0 && (
                        <p style={{ marginTop: "-25px" }}>Rs. {item.variant?.saleAmount}</p>
                      )}
                    </div>
                  </div>

                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: '5px'
                  }}></div>

                  <div
                    className="mt-3"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
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
                          marginBottom: "24px",
                          borderRadius: "5px",
                          marginRight: '6px'
                        }}
                        value={selectedVariants[item.productId] || ""}
                        onChange={(e) => handleVariantChange(item.productId, e.target.value)}
                      >
                        {variant?.map((variant) => (
                          <option key={variant.variantId} value={variant.valueId}>
                            {variant.Value}
                          </option>
                        ))}
                      </select>
                    </ul>
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
                        <button onClick={() => decrementCount(item.productId)}>
                          <h1>-</h1>
                        </button>
                      </div>
                      <div>{item.quantity}</div>
                      <div>
                        <button onClick={() => incrementCount(item.productId)}>
                          <h1>+</h1>
                        </button>
                      </div>
                    </div>
                    <div>
                      <button
                        style={{ marginLeft: "10px", color: "red" }}
                        onClick={() => deleteById(item.productId)}
                      >
                        <h1>Remove</h1>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

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
                  <p>Rs: {calculateTotalPrice()}</p>
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
                    onClick={
                      handleCheckOut
                     
                      
                    }
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
