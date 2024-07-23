"use client";;
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Grand from "@Images/slider/spices.jpeg";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import { CartContext } from "../../Context/CartContext";
import { isAuth } from "../../Context/AuthContext";
import Header from "../../components/Header";
const Shop = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState<any>();
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
    if (cart.length > 0) {
      const productVariants = cart.reduce((acc, product) => {
        acc[product.productName] = product.variant?.valueId || "";
        return acc;
      }, {});
      setSelectedVariants(productVariants);
    } else {
      setSelectedVariants({});
    }
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
        valueId: item.valueId,
        Value: item.value,
        amount: item.price,
        saleAmount: item.sale_price,
        variantId: item.varientId
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
  const handleVariantChange = (item, value,) => {
    const { productId } = item
    const selectedVariant = variant.find(v => v.valueId === value);
    const newCart = cart.map(item => {
      if (item.productId === productId) {
        item.variant = selectedVariant;
      }
      return item;
    });
    setCart(newCart);
    setSelectedVariants(prevSelected => ({ ...prevSelected, [item.productName]: value }));
  };
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      if (item.variant && item.variant.saleAmount) {
        return total + item.variant.saleAmount * item.quantity;
      }
      return total;
    }, 0);
  };
  const handleCheckOut = async () => {
    if (Object.keys(selectedVariants).length == 0) {
      toast.error('Please Select quantity')
      return;
    }
    const isAuthnticate = isAuth();
    if (!isAuthnticate) {
      router.push("/login");
      return;
    }
    try {
      if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
      if (!userData.data) {
        throw new Error("User data not found");
      }
      const { customerId, access_token } = userData.data;
      const items = cart.map((item) => ({
        productId: item.productId,
        productName: item.productName,
        variantId: item.variant.variantId,
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
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
          'Accept': 'application/json',
          'Authorization': `${access_token}`,
        },
        body: JSON.stringify(payload),
      }
      const response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/addToCart', requestOptions);
      const data = await response.json();
      if (response.status == 200 && data.message === 'Items added to cart successfully') {
        router.push("/shop-now/checkOutDetails")
      } else {
        toast.error('please select item');
      }
    }
    } catch (error) {
      toast.error("please select item");
    }
  };

  return (
    <>
      <Toaster />
      <Header />
      <div className="z-20">
        <Image
          src={Grand}
          alt="this is a image"
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
                      height: "350px",
                    }}
                  >
                    <div className="cursor-pointer" onClick={() => productById(item.productId)}>
                      <div style={{ marginBottom: "8px" }}>
                        <Image
                          src={item.productImages}
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
                        <h4 style={{ textAlign: "center", cursor: 'pointer' }}>{item.productName}</h4>
                        <div style={{ display: "grid", justifyContent: "center" }}>
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
                    </div>
                    <div style={{ position: "absolute", bottom: "20px", width: "100%", textAlign: "center" }}>
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
              style={{ width: "50%", overflow: 'scroll', marginTop: '140px', paddingBottom: '100px' }}
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
                      src={item.productImages}
                      alt="image"
                      width={200}
                      height={200}
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
                      <p style={{ textDecoration: 'line-through' }}>
                        {item.variant?.amount ? `Rs. ${item.variant.amount}` : ''}
                      </p>
                      <p className="mt-3" style={{ width: '150px' }}>Quantity ({item.quantity})  {item.variant?.Value}</p>
                    </div>
                    <div>
                      {item.variant?.saleAmount !== 0 && (
                        <p style={{ marginTop: "-25px" }}> {item.variant?.saleAmount ? `Rs. ${item.variant.saleAmount}` : 0}</p>
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
                        value={selectedVariants?.[item.productName] || ""}
                        onChange={(e) => handleVariantChange(item, e.target.value)}
                      >
                        <option value={''}>Select Quantity</option>
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
