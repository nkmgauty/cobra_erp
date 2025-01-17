import React from "react";

function Registration() {
    
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [cpass, setCpass] = useState("");

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     let result = await fetch("http://localhost:5000/register", {
//       method: "post",
//       body: JSON.stringify({ email, pass, cpass }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     result = await result.json();
//     console.warn(result);
//     if (result) {
//       alert("Data saved succesfully");
//       setEmail("");
//       setPass("");
//       setCpass("");
//     }
//   };

  return (
    <>
      <div className="flex  justify-center items-center h-screen bg-gradient-to-r from-gray-200 to-gray-400">
        <div class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-white-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="w-full border shadow-sm rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  placeholder="Email"
                  
                  autoComplete="off"
                 
                  required
                ></input>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  class="w-full border shadow-sm rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                 
                 
                  required
                ></input>
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder=""
                  class="w-full border shadow-sm rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                 
                  required
                ></input>
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  ></input>
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-light text-gray-500 ">
                    I accept the{" "}
                    <a
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-green-500 p-2 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
