'use client'
import Image from "next/image";
import Handshake from "../../../public/images/svgs/Handshake.jpg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Result } from "postcss";
const Login = () => {

  const [name, setName]= useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('')
  const router = useRouter();
  

  async function signUp(e){
    e.preventDefault()
    let item = {email,password,name,number}
    console.log(item);
   let result = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/signup',{
      method: 'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        'Accept': 'application/json'
      }
    })
    console.log("result", result)
    let data = await result.json();
    console.log("data",data);
    // localStorage.setItem("user-info",JSON.stringify(result));
    // router.push("/add");
   
  }
  return (
    <section className="overflow-hidden pt-24 md:pt-16 lg:pt-16 px-6 md:px-24 lg:px-24 bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center min-h-screen">
      <div className="container">
        <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
           Sign Up
          </h2>
          <div>
            <h5>
              Doesn't have an account yet?
            </h5>
          </div>
          <form className="mt-8 space-y-6"onSubmit={signUp}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <div className="mb-2">
                  <label htmlFor="email-address">Name</label>
                </div>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  value={name}
                  autoComplete="Name"
                  onChange={(e)=>setName(e.target.value)}
              
                  required
                  className="appearance-none rounded-none mb-5 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <div className="mb-2">
                  <label htmlFor="password">Mobile No.</label>
                </div>
                <input
                  id="mobileno."
                  name="mobileno"
                  onChange={(e)=>setNumber(e.target.value)}
                  value={number}
                  type="text"
                  autoComplete="mobileno"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="Mobile No"
                />
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <div className="mb-2">
                  <label htmlFor="email-address">Email Address</label>
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                 value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none mb-5 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <div className="mb-2">
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                 value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
               Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      <img
        alt="Violin"
        src="https://png.pngtree.com/png-clipart/20230929/original/pngtree-flat-vector-illustration-of-man-working-from-home-vector-png-image_12913303.png"
        className="h-full py-8 w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
};

export default Login;
