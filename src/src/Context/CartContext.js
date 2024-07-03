'use client';
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [data, setData] = useState([]);
  const [variantData, setVariantData] = useState([]);
  const [cart, setCart] = useState([]);
  const [productId, setProductId] = useState("");
  const [checkOut, setCheckOut] = useState([]);
  const [count, setCount] = useState(1);
  const [variant, setVariant] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [singleProduct, setSingleProduct] = useState({})

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getAllSpicesProduct');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data);
        const allVariants = result.data.flatMap(product => product.Variant);
        setVariant(allVariants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const productVariants = cart.map(product => product.Variant);
    setVariant(...productVariants);
  }, [cart]);

  // ---------------------- signup api ---------------//

  const signUp = async (e) => {
    e.preventDefault();
    const item = { email, password, name, number };

    try {
      const response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/signup', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (!data.error) {
        localStorage.setItem('token', data.token);
        toast.success("Account Created Successfully!");
        router.push("/login");
      } else {
        toast.error(data.message || "Signup failed! Please try again.");
      }
    } catch (error) {
      toast.error("Signup failed! Please try again.");
    }
  };
  const isProductInCart = (product) => cart.findIndex(({ productId }) => productId === product?.productId);

  // ------------------ProductById------------

  const getSingleProduct = async () => {
    try {
      const response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/getAllSpicesProduct');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const singleProduct = await response.json();
      setSingleProduct(singleProduct.data)


    } catch (error) {
      toast.error('Error fetching data:');
    }
  }
  const buyProduct = async (item,product) => {
    const productData =  data.filter((item) => item.productId === product.productId);
  };


  return (
    <CartContext.Provider
      value={{
        data,
        cart,
        setCart,
        productId,
        setProductId,
        isProductInCart,
        variantData,
        setVariantData,
        checkOut,
        setCheckOut,
        count,
        setCount,
        variant,
        setVariant,
        showCartPopup,
        setShowCartPopup,
        name,
        setName,
        email,
        setEmail,
        number,
        setNumber,
        password,
        setPassword,
        signUp,
        getSingleProduct,
        buyProduct


      }}
    >
      {children}
    </CartContext.Provider>
  );
}
