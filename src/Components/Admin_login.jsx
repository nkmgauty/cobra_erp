import React from "react";
import Logo from "../assets/Images/Cobra_logo.png";
import Adminimg from "../assets/Images/Admin_img.png";

function Admin_login() {
  return (
    <>
      {/* <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen items-center '>

<div className='pt-40 flex justify-center items-center h-screen '>
    <div className='flex max-w-72  bg-slate-200 shadow-xl rounded-lg overflow-hidden w-full justify-evenly items-center flex-col'>
    <img src={Logo} className='h-12 w-22 p-2'></img>
    <h2 className="text-2xl font-semibold text-black-700 text-center mb-4 hover:text-green-400">
            Admin Login
          </h2>
   <form className="flex flex-col ">
    <div className="mb-4">
    <label className="block text-black-700 mb-1 max-w-7">Email</label>
    <input type="email" placeholder=" Email" required className="w-full max-w-60 border rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    </input> </div>
    <div className="mb-4">
    <label className="block text-black-700 mb-1 max-w-60 ">Password</label>
    <input type="Password" placeholder=" Password" required className="w-full max-w-60  border rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500">
    </input> </div>
    <div className='pb-2 pl-20'>
    <button type='submit' className="bg-green-500 border rounded-lg p-1 hover:bg-green-300 max-w-60 ">Login</button>
    </div>
   </form>
    </div>

</div>
  </div> */}

      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-200 to-gray-400 ">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-md p-6 shadow-lg rounded bg-white  mx-auto">
          <div className="flex items-center justify-center pb-4 hover:opacity-80">
            <img src={Logo} className="h-42 w-32 "></img>
          </div>
          <h1 className=" text-center text-2xl font-semibold">Admin Login</h1>
          <hr className="mt-3"></hr>
          <div className="mt-3 flex flex-col">
            <label for="username" className="pb-1">
              Username
            </label>
            <input
              type="email"
              id="email"
              className="w-full border shadow-sm rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              autoComplete="off"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            ></input>
          </div>
          <div className="mt-3 flex flex-col">
            <label for="password" className="pb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border shadow-sm rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            ></input>
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className="flex">
              <input type="checkbox"></input>
              <label> Remember me</label>
            </div>
            <div>
              <a href="#" className="text-sky-700">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="flex justify-center pt-3">
            <button className="border rounded-md w-full bg-green-500 p-2 hover:bg-green-400">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin_login;
