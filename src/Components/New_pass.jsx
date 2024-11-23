import React from 'react'

function New_pass() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-200 to-gray-400">
      <div className="bg-white rounded-xl shadow-lg border-indigo-300 w-full sm:max-w-md p-6">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-black">Create New Password</h1>
          <p className="mt-2 text-sm text-gray-400">
            Your new password must be different from previous passwords.
          </p>
        </div>

        <div className="mt-5">
          <form>
            <div className="grid gap-y-4">
             
              <div>
                <label htmlFor="new-password" className="block text-sm font-bold ml-1 mb-2 text-black">
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  name="new-password"
                  className="w-full border shadow-sm rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2"
                  placeholder="Enter new password"
                  required
                  minLength="8"
                />
              </div>

              
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-bold ml-1 mb-2 text-black">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  className="w-full border shadow-sm rounded-lg focus:outline-none focus:border-blue-500 px-4 py-2"
                  placeholder="Re-enter new password"
                  required
                  minLength="8"
                />
              </div>

              {/* Reset Password Button */}
              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white bg-green-500 p-2 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition-all text-sm"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default New_pass