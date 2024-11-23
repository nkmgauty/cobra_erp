import React from "react";

function Test() {
  return (
    <div>
      <div className="grid grid- h-screen justify-evenly bg-red-300">
        <div className="bg-green-400 m-14 p-10">1</div>
        <div className="bg-green-400 m-14 p-10">
          <form  className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
               
                
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
              <div></div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                
                
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Test;
