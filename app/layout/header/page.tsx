"use client";

import CallLoginForm from "@/app/components/callBackLogin/page";
import CallbackForm from "@/app/components/callbackform/page";
import RegistrationPopup from "@/app/components/registrationPopUp/page";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [formType, setFormType] = useState('login');
  const [showLoginBtn, setShowLoginBtn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ mes: "", color: "" });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };
    console.log("Form submitted:", data);
    handleCloseModal();
  };

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleLoginSubmit = (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      user: formData.get("user"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone: formData.get("phone"),
    };

    const handleResponse = (response:any, successMessage:any, errorMessage:any) => {
      if (response.data.status === 200) {
        setPopupMessage({ mes: successMessage, color: "bg-green-600" });
      } else {
        setPopupMessage({ mes: errorMessage, color: "bg-red-600" });
      }
      setShowPopup(true);
    };

    const handleError = (errorMessage:any) => {
      setPopupMessage({ mes: errorMessage, color: "bg-red-600" });
      setShowPopup(true);
    };

    if (data.user && data.phone) {
      const signUpData = {
        user: data.user,
        email: data.email,
        password: data.password,
        phone: data.phone,
      };
      setFormType("signup");
      const url = 'https://next-14-deploy-iide.vercel.app/api/auth/signup';
      axios.post(url, signUpData)
        .then((res) => handleResponse(res, "Sign up successful", "Sign up failed"))
        .catch(() => handleError("Sign up failed"));
    } else {
      const logInData = {
        email: data.email,
        password: data.password,
      };
      setFormType("login");
      const url = 'https://next-14-deploy-iide.vercel.app/api/auth/login';
      axios.post(url, logInData)
        .then((res) => {
          if (res.data.status === 200) {
            handleResponse(res, "Login successful", "Login failed");
            setShowLoginBtn(false)
          } else if (res.data.status === 401) {
            handleError("Incorrect Password");
          } else if (res.data.status === 404) {
            handleError("Email not found");
          } else {
            handleError("Login failed");
          }
        })
        .catch(() => handleError("Login failed"));
    }

    handleLoginClose();
  };

  return (
    <>
      <div className="bg-white text-white font-sans fixed w-full z-10">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between max-w-6xl z-10">
          <div className="items-center">
            <Image
              src="/assets/nxt_assets/logo.webp"
              alt="IIDE Logo"
              width={80}
              height={100}
            ></Image>
          </div>
          <div className="lg:hidden">
            <button className="px-4 py-2 rounded-md bg-white text-gray-800 hover:bg-gray-100">
              <svg
                className="h-5 w-5 inline-block mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex space-x-4">
            <button
              className="px-4 py-2 rounded-md bg-customBlue text-white"
              onClick={handleOpenModal}
            >
              Request Callback
            </button>
            <button className="px-4 py-2 rounded-md bg-white text-gray-800 hover:bg-gray-100">
              Download Brochure
            </button>
            {
              showLoginBtn && 
              <button
              className="px-4 py-2 rounded-md text-customBlue hover:font-medium"
              onClick={handleLoginOpen}
            >
               Login
            </button>
            }
            
             
          </div>
        </nav>
        <div
        className="h-1 bg-customBlue transition-all duration-200"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
      </div>
      
      <CallbackForm
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
      <CallLoginForm
        isLoginOpen={isLoginOpen}
        handleLoginClose={handleLoginClose}
        onLoginSubmit={handleLoginSubmit}
      />
      <RegistrationPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        message={popupMessage}
      />
    </>
  );
}

export default Header;