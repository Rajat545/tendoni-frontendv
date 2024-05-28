'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const signInWithGoogleText = "Sign in with Google"; 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const router = useRouter();
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

    console.log("Fetch result:", response);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log("Data received:", data);

    // Check if the login was successful based on the actual API response structure
    if (!data.error) {
      // Storing user info in local storage
      localStorage.setItem("user-info", JSON.stringify(data));
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
    <section className="overflow-hidden pt-24 md:pt-16 lg:pt-16 px-6 md:px-24 lg:px-24 bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center min-h-screen">
      <div className="container">
        <ToastContainer />
        <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Login
          </h2>
          <div>
            <h5>
              Don't have an account yet? <Link href={"/sign-up"}>Sign Up</Link>
            </h5>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <div className="mb-2">
                  <label htmlFor="email-address">Email Address</label>
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:text-primary-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {signInWithGoogleText}
            </button>
          </div>
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
