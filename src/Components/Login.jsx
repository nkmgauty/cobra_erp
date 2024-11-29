import React, { useState } from "react";
// import erpimg from "../assets/Images/ERP_img.jpg";
import Logo from "../assets/Images/Cobra_logo.png";
import erps from "../assets/Images/Erp_side.jpg";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateInputs = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Please enter your email');
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter a password');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('The password must be 8 characters or longer');
      isValid = false;
    }

    return isValid;
  };

  const onButtonClick = () => {
    if (validateInputs()) {
      console.log('Form submitted', { email, password });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-6 flex flex-row shadow-2xl rounded-lg bg-white">
        {/* Logo and Image Section */}
        <div className="hidden lg:flex flex-col items-center justify-center w-1/3 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-l-lg">
          <img src={Logo} alt="Logo" className="h-24 w-48 mb-4" />
          <img src={erps} alt="ERP" className="h-40 w-40 rounded-full border-4 border-white shadow-lg" />
          <h2 className="mt-4 text-lg font-semibold">Welcome Back!</h2>
          <p className="text-sm text-gray-200 mt-2">
            Log in to continue managing your account.
          </p>
        </div>

        {/* Login Form Section */}
        <div className="w-full lg:w-2/3 p-6">
          <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800">Login</h1>
          <p className="text-center text-gray-600 mt-2">
            Enter your credentials to access your account.
          </p>
          <hr className="mt-4" />

          {/* Email Input */}
          <div className="mt-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 mt-1 text-sm"
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="material-icons text-red-500 mr-1">error</span>
                {emailError}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 mt-1 text-sm"
            />
            {passwordError && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="material-icons text-red-500 mr-1">error</span>
                {passwordError}
              </p>
            )}
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div className="mt-6">
            <button
              onClick={onButtonClick}
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Login
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-600 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
