import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarProduct from "../components/navbarProduct";
import AddProduct from "../components/insertProduct";
import UpdateProduct from "../components/updateProduct";
import DeleteProduct from "../components/deleteProduct";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (userData && userData.success) {
      alert(userData.message)
    }
  }, [userData]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });

      if (response.data.success) {
        setIsLoggedIn(true);
        setUserData(response.data);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Failed to login. Please try again later.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoggedIn(false);
      setUserData(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[2rem]">
      {isLoggedIn ? (
        <>
          <NavbarProduct handleLogout={handleLogout} userData={userData} />
          <div className="flex gap-3 items-center">
            <DeleteProduct userData={userData} />
            <AddProduct userData={userData} />
            <UpdateProduct userData={userData} />
          </div>
        </>
      ) : (
        <>
          {errorMessage && (
            <div className="relative">
              <div
                id="error-msg"
                className="text-black px-6 py-3 bg-white rounded-md shadow-md text-xl mb-6 font-medium text-center shadow-red-500-left-3 relative"
              >
                <span
                  className="absolute top-[-10px] right-[-10px] bg-gray-100 rounded-full cursor-pointer"
                  onClick={() => setErrorMessage("")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 hover:text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
                {errorMessage}
              </div>
            </div>
          )}

          <div className="flex flex-col items-center bg-white rounded-md shadow-md py-4 px-6">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md py-2 px-3 w-full mb-4"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-md py-2 px-3 w-full mb-4"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
