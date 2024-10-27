"use client";;
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Grand from "@Images/slider/spices.jpeg";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import { CartContext } from "../../Context/CartContext";
import { isAuth } from "../../Context/AuthContext";
import Header from "../../components/Header";
import './style.css'
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

  console.log(variant?.map(item=> item),"varients details")


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
    console.log(item,"cart item")
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.productId === item.productId);
    console.log(existingItemIndex)
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
        variantId: item.variantId
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
  let selectedVariant="";
 
  const handleVariantChange = (item, value,) => {
    const { productId } = item
 
 
    for (const item of cart) {
 
      for (const variant of item.Variant) {
        if (variant.valueId === value && item.productId === productId) {
          selectedVariant=variant;
        }
      }
    }
  
 
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
    
    if (Object.keys(selectedVariants).length === 0) {
      toast.error('Please Select quantity')
      return;
    }
    const isAuthentic = isAuth();
    if (!isAuthentic) {
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
          price: parseInt(item.variant.saleAmount),
          maxPrice: parseInt(item.variant.amount),
        }));
        console.log(items,"ye hai items")
        const payload = {
          customerId,
          items,
        };
        const requestOptions = {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            Accept: 'application/json',
            Authorization: `${access_token}`,
          },
          body: JSON.stringify(payload),
        }
        const response = await fetch('https://api.tendonigroup.com/web/api/v1/addToCart', requestOptions);
        const data = await response.json();
        console.log(response,"ye hai response")
        console.log(data,"ye hai data")
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
            <div className="lg:flex justify-center md:mx-4 gap-4 flex-wrap">
              {data?.map((item) => (
                <div
                  key={item.productId}
                  className="w-full my-4 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex-shrink-0 flex justify-center"
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-4 relative overflow-hidden shadow-md flex flex-col items-center h-96">
                    <div className="cursor-pointer" onClick={() => productById(item.productId)}>
                      <Image
                        src={item.productImages}
                        className="mb-4"
                        alt="Product Image"
                        width={200}
                        height={200}
                      />
                      <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs">
                        {Math.floor(item.discount)}% Off
                      </div>
                      <h4 className="text-center font-medium text-base mb-2">
                        {item.productName}
                      </h4>
                      <div className="flex flex-col items-center">
                        <h4 className="text-gray-500 line-through text-sm">
                          Rs. {item.price}
                        </h4>
                        <h4 className="text-gray-800 font-bold text-base">
                          Rs. {item.sale_price}
                        </h4>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        addToCartItem(item);
                        openPopup();
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-auto transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
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
              className="bg-white p-8 max-w-lg h-screen fixed right-0 overflow-y-scroll mt-40 pb-24"
              onClick={(e) => e.stopPropagation()}
              id='addToCart'
            >
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold">Your Cart ({cart.length})</h2>
                <button
                  className="hover:bg-red-500 text-gray-700 py-2 px-3 font-bold rounded"
                  onClick={closePopup}
                >
                  X
                </button>
              </div>
              <div className="flex justify-between border-b pb-2 mb-4">
                <p className="font-medium">Product</p>
                <p className="font-medium">Total</p>
              </div>
              {cart.map((item) => (
                <div key={item.productId} className="flex flex-col mb-6">
                  <div className="flex items-center gap-6 mb-4">
                    <Image
                      className=" object-contain"
                      src={item.productImages}
                      alt="Product Image"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col flex-grow">
                      <a href="#" className="font-medium text-blue-600 hover:underline">
                        {item.productName}
                      </a>
                      <p className="font-normal line-through">
                        {item.variant?.amount ? `Rs. ${item.variant.amount}` : ''}
                      </p>
                      <p className="text-gray-700 mt-2">
                        Quantity ({item.quantity})  {item.variant?.Value}
                      </p>
                    </div>
                    <div>
                      {item.variant?.saleAmount !== 0 && (
                        <p className="font-medium">
                          {item.variant?.saleAmount ? `Rs. ${item.variant.saleAmount}` : 0}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-4" id='btn'>
                    <div className="flex items-center gap-2">
                      <select
                        name="quantity"
                        id="quantity"
                        className="border border-gray-300 p-2 rounded"
                        value={selectedVariants?.[item.productName] || ""}
                        onChange={(e) => handleVariantChange(item, e.target.value)}
                      >
                        <option value="">Select Quantity</option>
                        {item.Variant?.map((variant) => (
                          <option key={variant.variantId} value={variant.valueId}>
                            {variant.Value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center border border-gray-300 p-2 rounded">
                      <button onClick={() => decrementCount(item.productId)} className="px-2">
                        -
                      </button>
                      <div className="px-4">{item.quantity}</div>
                      <button onClick={() => incrementCount(item.productId)} className="px-2">
                        +
                      </button>
                    </div>
                    <button
                      className="text-red-500 font-bold"
                      onClick={() => deleteById(item.productId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center border-t pt-4 mt-6">
                <p className="font-medium">Estimated Total</p>
                <p className="font-medium">Rs: {calculateTotalPrice()}</p>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCheckOut}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Shop;
