import React from 'react'
import Logo from "../assets/Images/Cobra_logo.png"
import stafimg from "../assets/Images/Staff_img.jpeg"

function Staff_login() {
  return (
   <>
  <div className="flex flex-row bg-blue-400 h-screen p-8">
<div className="flex bg-slate-200 shadow-xl rounded-lg overflow-hidden w-full justify-evenly m-12 p-14">
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
<div className='p-1 border border-black bg-black hover:bg-lime-500'>

</div>
<div className="p-12">
        <img src={stafimg} className="h-80 w-80 object-cover opacity-100 transition-opacity duration-300 hover:opacity-80"></img>
    </div>
</div>
</div>
   </>
  )
}

export default Staff_login