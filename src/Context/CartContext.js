'use client';
import { createContext, useEffect, useState } from 'react';
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [data, setData] = useState([]);
  const [varientData , setVarientData] = useState([])
  const [cart, setCart] = useState([]);
  const [productId, setProductId] = useState("");
  const [checkOut, setCheckOut] = useState([])
  const [count, setCount] = useState(1)
  const [variant, setVariant] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getAllSpicesProduct');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let result = await response.json();
        setData(result.data);


        console.log('result', result.data);

        // Extract variants from the fetched data
        const allVariants = result.data.flatMap(product => product.Variant);
        setVariants(allVariants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const productVarient = cart.map((product) => product.Variant);
    setVariant(...productVarient);
    console.log(productVarient,"productVarient")
  }, [cart]);



  const isProductInCart = (product) => cart?.findIndex(({ productId }) => productId === product?.productId);

  return (
    <CartContext.Provider
      value={{
        data,
        cart,
        setCart,
        productId,
        setProductId,
        isProductInCart,
        varientData,
        setVarientData,
        checkOut,
        setCheckOut,
        count,
        variant,
        setVariant,
        setCount,
        showCartPopup,
        setShowCartPopup
      }}
      
    >
      {children}
    </CartContext.Provider>
  );
}
