import Footer from "@/app/layout/footer/page";
import React, { useEffect, useState } from "react";
import SemiNav from "../semiNav/page";
import Faqs from "../faqs/page";
import Alumini from "../alumini/page";
import Learners from "../learners/page";
import MainBanner from "../mainBanner/page";

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      console.log("Response was not OK");
      return null;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error while fetching data:", err);
    return null;
  }
};

async function Page() {
  const apiData = await getData();
  return (
    <>
    <MainBanner/>
    <SemiNav/>
    <Alumini/>
    <Learners/>
    <Faqs/>
    <Footer/>
    </>
  );
}

export default Page;
