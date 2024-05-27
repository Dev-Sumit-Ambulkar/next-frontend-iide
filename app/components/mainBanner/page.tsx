"use client";
import Header from "@/app/layout/header/page";
import Image from "next/image";
import React, { useState } from "react";
import PopUp from "../popup/page";
import CallbackForm from "../callbackform/page";
import CallLoginForm from "../callBackLogin/page";
import RegistrationPopup from "../registrationPopUp/page";
import axios from "axios";

export default function MainBanner() {
  const [formType, setFormType] = useState("login");
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

  const handleSubmit = (event: any) => {
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

  const handleLoginSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("form Data", formData);
    const data = {
      user: formData.get("user"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone: formData.get("phone"),
    };

    const handleResponse = (
      response: any,
      successMessage: any,
      errorMessage: any
    ) => {
      if (response.data.status === 200) {
        setPopupMessage({ mes: successMessage, color: "bg-green-600" });
      } else {
        setPopupMessage({ mes: errorMessage, color: "bg-red-600" });
      }
      setShowPopup(true);
    };

    const handleError = (errorMessage: any) => {
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
      const url = "https://next-14-deploy-iide.vercel.app/api/auth/signup";
      axios
        .post(url, signUpData)
        .then((res) =>
          handleResponse(res, "Sign up successful", "Sign up failed")
        )
        .catch(() => handleError("Sign up failed"));
    } else {
      const logInData = {
        email: data.email,
        password: data.password,
      };
      setFormType("login");
      const url = "https://next-14-deploy-iide.vercel.app/api/auth/login";
      axios
        .post(url, logInData)
        .then((res) => {
          if (res.data.status === 200) {
            handleResponse(res, "Login successful", "Login failed");
            setShowLoginBtn(false);
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
    <div>
      <div className="bg-gray-900 min-h-screen text-white font-sans">
  <Header />
  <PopUp />
  <section className="container mx-auto px-4 py-16 lg:py-32 flex flex-col lg:flex-row items-center max-w-7xl">
    <div className="lg:w-1/2 text-center lg:text-left lg:pr-16">
      <p className="text-orange-500 text-sm mb-2">
        2 year program for 1st to pre-final year college students
      </p>
      <h1 className="text-5xl lg:text-6xl font-bold mb-6">
        Complete CS Education to transform you into a{" "}
        <span className="text-orange-500">10X </span>Developer
      </h1>
      <p className="text-lg mb-8">
        The mentorship you need, the coding culture you deserve.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
        <button className="px-6 py-3 bg-customBlue text-white rounded-md" onClick={handleOpenModal}>
          Request Callback
        </button>
        <button className="px-6 py-3 bg-white text-gray-800 rounded-md hover:bg-gray-100">
          Download Brochure
        </button>
        {/* {showLoginBtn && (
          <button
            className="px-4 py-2 rounded-md text-customBlue hover:font-medium"
            onClick={handleLoginOpen}
          >
            Login
          </button>
        )} */}
      </div>
    </div>
    <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
      <div className="w-full md:w-4/5 lg:w-full lg:max-w-lg">
        <Image
          src="/assets/nxt_assets/banner.webp"
          alt="banner"
          width={800}
          height={600}
          layout="responsive"
          className="mx-auto"
        />
      </div>
    </div>
  </section>
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
    </div>
  );
}
