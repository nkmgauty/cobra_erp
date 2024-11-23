import React, { useState } from "react";
import erpimg from "../assets/Images/ERP_img.jpg";
import Logo from "../assets/Images/Cobra_logo.png";
import erps from "../assets/Images/Erp_side.jpg";
import { Link } from "react-router-dom";



function Login() {

  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')

const onButtonClick = () => {

setEmailError('')
setPasswordError('')


if ('' === email) {
  setEmailError('Please enter your email')
  return
}

if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
  setEmailError('Please enter a valid email')
  return
}

if ('' === password) {
  setPasswordError('Please enter a password')
  return
}

if (password.length < 7) {
  setPasswordError('The password must be 8 characters or longer')
  return
}


}
 
  
  return (
    <>
      {/* <div className="flex flex-row bg-blue-400 h-screen p-8">
<div className="flex bg-slate-200 shadow-xl rounded-lg overflow-hidden w-full justify-evenly m-12 p-14">
    <div className="p-12">
        <img src={erpimg} className="h-80 w-80 object-cover opacity-100 transition-opacity duration-300 hover:opacity-80"></img>
    </div>
    <div className="p-20 justify-evenly ">
    <h2 className="text-2xl font-semibold text-black-700 text-center mb-4">
            Login
          </h2>
   <form className="flex flex-col ">
    <div className="mb-4">
    <label className="block text-black-700 mb-1">Email</label>
    <input type="email" placeholder=" Email" className="w-full border rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    </input> </div>
    <div className="mb-4">
    <label className="block text-black-700 mb-1">Password</label>
    <input type="Password" placeholder=" Password" className="w-full border rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500">
    </input> </div>
    <button className="bg-green-500 border rounded-lg p-1 hover:bg-green-300">Login</button>
   </form>
</div>
</div>
</div> */}

      <div className="flex  justify-center items-center h-screen bg-gradient-to-r from-gray-200 to-gray-400 ">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-6 flex flex-row lg:flex-row justify-around  shadow-lg rounded bg-white  mx-auto  ">
          <div className="flex items-center justify-center flex-col">
            <div className="flex  items-center justify-center pb-4 hover:opacity-80">
              <img
                src={Logo}
                className="h-20 w-20 object-contain md:h-32 md:w-32"
              ></img>
            </div>
            <img src={erps} className="h-52 w-38 rounded-full"></img>
          </div>
          <div className="divider p-[1px] bg-black divider-horizontal"> </div>

          <div className="w-full md:w-1/2">
            <h1 className=" text-center text-xl md:text-2xl font-semibold">
              Login
            </h1>
            <hr className="mt-3"></hr>
            <div className="mt-3 flex flex-col">
              <label htmlFor="username" className="pb-1 text-sm md:text-base">
                Username
              </label>
              <input
                type="email"
                id="email"
                className="w-full border shadow-sm rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 text-sm md:text-base"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                
              ></input>
              <label className="errorLabel">{emailError}</label>
            </div>
            <div className="mt-3 flex flex-col">
              <label htmlFor="password" className="pb-1 text-sm md:text-base">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                className="w-full border shadow-sm rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 text-sm md:text-base"
              ></input>
              <label className="errorLabel">{passwordError}</label>
            </div>
            <div className=" w- auto flex justify-between items-center pt-2 text-sm md:text-base">
              <div className="flex">
                <input type="checkbox"></input>
                <label>Remember me</label>
              </div>
              <div>
                <a href="#" className="text-sky-700">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="flex w-full justify-center pt-3">
              
                <button onClick={onButtonClick} className="border rounded  w-full h-12   bg-green-500 p-2 hover:bg-green-400">
                  Login
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
