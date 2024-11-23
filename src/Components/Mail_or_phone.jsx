import React from "react";

function Mail_or_phone() {
  return (
    <>
      <div className="flex  justify-center items-center h-screen bg-gradient-to-r from-gray-200 to-gray-400">
        <div class="mt-7  bg-white  rounded-xl shadow-lg  border-indigo-300">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold text-black">
                Forgot password?
              </h1>
              <div className="flex justify-between">
                <p class="mt-2 text-sm text-gray-400 ">
                  Remember your password?
                  <a
                    class="text-blue-600 decoration-2 hover:underline ml-4 font-medium"
                    href="/"
                  >
                    Login here
                  </a>
                </p>
              </div>
            </div>

            <div class="mt-5">
              <form>
                <div class="grid gap-y-4">
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-bold ml-1 mb-2 text-black"
                    >
                      Email address
                    </label>
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="w-full border shadow-sm rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      ></input>
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  <button
                    type="submit"
                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold  text-white bg-green-500 p-2 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mail_or_phone;
