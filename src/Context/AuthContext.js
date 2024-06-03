'use client';
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const AuthContext = createContext();
let getToken;
export const setToken = (token) => {
  getToken = token;
};
export function AuthProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  const router = useRouter();

  //  ----------------------Login api ---------------


  async function handleSubmit(e) {

    e.preventDefault();
    console.log("Form submitted with:", email, password);

    const userData = { email, password }; // Combine email and password into an object
    try {
      const response = await fetch("https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/login", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userData) // Send userData object as JSON string
      });


      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();

      if (!data.error) {



        localStorage.setItem("user-info", JSON.stringify(data));

        localStorage.setItem("access-token", JSON.stringify(data?.access_token));
        setToken(data?.access_token);
        toast.success("Successfully logged in!");
        router.push("/shop-now");
      } else {
        toast.error(data.message || "Login failed! Please check your credentials and try again.");
      }
    } catch (error) {
      console.error("There was an error!", error);
      toast.error("Login failed! Please check your credentials and try again.");
    }
  }



  return (

    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        userInfo,
        setUserInfo,
        handleSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export const isAuth = () => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("access-token");

    return getToken || accessToken ? true : false;
  }
};
