"use client";
import React, { useEffect, useState } from "react";

function PopUp() {
  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPopUp(true);
    }, 8000);
  }, []);
  return (
    <div>
      {showPopUp && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div
            className="bg-custom-gradient rounded-xl shadow-lg p-6 max-w-sm relative"
            style={{ border: "3px solid #f05237" }}
          >
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-100"
              onClick={() => setShowPopUp(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-white font-bold text-xl mb-3">
              Claim your ₹30,000 scholarship.
            </div>
            <p className="text-white text-base mb-4">
              Enroll by May 25, 2024 or dial 9867912656 now!
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full">
              Request Call Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;