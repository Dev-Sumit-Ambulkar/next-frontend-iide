// components/CallbackForm.js

import React from 'react';

const CallbackForm = ({ isOpen, handleClose, onSubmit }:any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/3 p-6">
        <button
          className="absolute top-3 right-3 text-black text-lg"
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4 text-black font-bold">Request a Callback</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name='name'
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              autoComplete='off'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name='phone'
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              rows={4}
              cols={2}
              name='message'
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallbackForm;
