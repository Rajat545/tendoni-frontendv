"use client";;
import Image from "next/image";
import Grand from "@Images/slider/spices.jpeg";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../../../Context/CartContext";
import { isAuth } from "../../../Context/AuthContext";
import ScrollAnimation from "../../../utils/ScrollAnimation";
import '../ProductDetails/style.css'
import Header from "../../../components/Header";
const ProductDetails = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState<any>();
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState({
    valueId: "",
    Value: "",
    amount: 0,
    saleAmount: 0,
    variantId: ''
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
    showCartPopup,
    setShowCartPopup,
    buyProduct,
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
    setShowCartPopup(true);
    document.body.style.overflow = "hidden";
  };
  const closePopup = () => {
    setShowPopup(false);
    setShowCartPopup(false);
    document.body.style.overflow = "auto";
  };
  const deleteById = (productId) => {
    const deleteData = cart.filter((item) => item.productId !== productId);
    setCart(deleteData);
    toast.error("Removed from cart");
  };
  const addToCart = async (item, name) => {
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
        handleCheckOut();
      }
    } else {
      const defaultVariant = {
        valueId: quantity.valueId,
        Value: quantity.Value,
        amount: quantity.amount,
        saleAmount: quantity.saleAmount,
        variantId: quantity.variantId
      };
      
      const newItem = { ...item, quantity: 1, variant: defaultVariant };
      await setCart((prevCart) => [...prevCart, newItem]);
      toast.success("Added to cart successfully!");
      if (name === "buy") {
        handleCheckOut();
      }
    }
  };
  
  const handleVariantChange = (e) => {
    const selectedVariantId = e.target.value;
    const selectedVariant = quantityData.find(
      (v) => v.valueId === selectedVariantId
    );
    setQuantity(selectedVariant);
    console.log(selectedVariant  )
  };


  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      if (item.variant && item.variant.saleAmount) {
        return total + item.variant.saleAmount * item.quantity;
      }
      return total;
    }, 0);
  };
  
  const fetchProductById = async (productId) => {
    try {
      const url = `https://api.tendonigroup.com/web/api/v1/getProductById/${productId}`;
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

  

  const handleCheckOut = async () => {
    console.log("Checkout function called");
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
        const items = cart?.map((item) => ({
          productId: item.productId,
          productName: item.productName,
          variantId: item.variant.variantId,
          valueId: item.variant.valueId,
          quantity: item.quantity,
          price: parseInt(item.variant.saleAmount),
          maxPrice: parseInt(item.variant.amount),
        }));
        console.log(items,'i')
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
          "https://api.tendonigroup.com/web/api/v1/addToCart",
          requestOptions
        );
        const data = await response.json();
        console.log(response,"this is cart response");
        console.log(data,"this is cart data");
        if (response.status === 200) {
          toast.success("Product added to cart successfully!");
          router.push("/shop-now/checkOutDetails");
        } else {
          toast.error("Failed to add product to cart! Please try again.");
        }
      } catch (error) {
        toast.error("Failed to complete checkout! Please try again.");
      }
    }
  };

  let selectedVariant="";

  const handleVariantChanged = (item, value,) => {
    const { productId } = item
 
    console.log("itemdata",item)

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

  console.log("cart", cart)

  console.log("selectedVariants", selectedVariants)

  return (
    <>
    <Header/>
      <Toaster />
      <div className="z-20">
        <Image src={Grand} alt="" className="lg:h-[80vh] h-auto w-full" />
      </div>
      <div>
      <section className=" bg-white">
          <div className="py-6 md:py-8 lg:py-10" id='section'>
            {productDetails?.map((item, index) => (
              <ScrollAnimation key={index}>
                <section
                  key={index}
                  id={item?.sectionId}
                  className={`${index % 2 === 0 ? "py-6 md:py-8 lg:py-10" : "bg-stone-300 py-6 md:py-8 lg:py-14"
                    }`}
                >
                  <div className="flex flex-col max-w-7xl items-center px-4 md:flex-row mx-auto" id='container'>
                    <div
                      className={`relative max-w-md px-4 md:w-1/2 md:max-w-none lg:mb-0 ${index % 2 === 0 ? "order-first" : ""
                        }`}
                    >
                      <img
                        src={selectedImage || item.productImages}
                        alt="Product Image"
                        className="object-contain cursor-pointer"
                        width={600}
                        height={450}
                      />
                      <div className="flex mt-5 space-x-2 gap-4" id='slideImage'>
                        {productDetails.map((_, idx) => (
                          <div key={idx} className="overflow-hidden cursor-pointer">
                            <img
                              src={item.productFrontimage}
                              alt="Image"
                              className="object-contain cursor-pointer"
                              width={120}
                              height={120}
                              onClick={() => setSelectedImage(item.productFrontimage)}
                            />
                          </div>
                        ))}
                            {productDetails.map((_, idx) => (
                          <div key={idx} className=" overflow-hidden cursor-pointer">
                            <img
                              src={item.productBackimage}
                              alt="Image"
                              className="object-contain cursor-pointer"
                              width={120}
                              height={120}
                              onClick={() => setSelectedImage(item.productBackimage)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`w-full md:w-1/2 md:pl-10 ${index % 2 !== 0 ? "md:order-first" : ""
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
                            {quantity?.saleAmount ? `Rs: ${quantity.saleAmount}` : "Select Item First"}
                          </h5>
                        </div>
                      </p>
                     {productInCart ? ('')
                     :
                     <div className="">
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
                   </div>} 
                      {productInCart ? (
                        <div>
                          <button
                            onClick={openPopup}
                            className="bg-yellow-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
                            id='btn'
                            className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Buy Now
                          </button>
                        </div>
                      )}
                      <div dangerouslySetInnerHTML={{__html: item.description}} className="py-3 md:pt-4 md:pb-8 text-gray-700 text-sm md:text-base lg:text-lg"/>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>
            ))}
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
                    <img
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
                        onChange={(e) => handleVariantChanged(item, e.target.value)}
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
                  onClick={()=>handleCheckOut()}
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
export default ProductDetails;
