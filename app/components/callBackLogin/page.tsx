// components/CallbackForm.js

import React, { useState } from "react";

const CallLoginForm = ({
  isLoginOpen,
  handleLoginClose,
  onLoginSubmit,
}: any) => {
  if (!isLoginOpen) return null;
  const [account, setAccout] = useState(false);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/3 p-6">
        <button
          className="absolute top-3 right-3 text-black text-lg"
          onClick={handleLoginClose}
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4 text-black font-bold">
          {account ? "Sign Up Form" : "Login Form"}
        </h2>
        <form onSubmit={onLoginSubmit}>
          {account && (
            <div className="mb-4">
              <label className="block text-gray-700">User Name</label>
              <input
                type="text"
                name="user"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              required
            />
          </div>
          {account && (
            <div className="mb-4">
              <label className="block text-gray-700">Contact Number</label>
              <input
                type="number"
                name="phone"
                pattern="\d{10}"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            {account ? "Sign Up" : "Log In"}
          </button>
        </form>
        <div
          className="text-customBlue p-2 justify-center font-medium text-center"
          onClick={() => setAccout(true)}
          style={account ? { display: "none" } : { display: "block" }}
        >
          Don't have Account ? Sign Up
        </div>
        <div
          className="text-customBlue p-2 justify-center font-medium text-center"
          onClick={() => setAccout(false)}
          style={!account ? { display: "none" } : { display: "block" }}
        >
          Already have an Account ? Log In
        </div>
      </div>
    </div>
  );
};
export default CallLoginForm;
