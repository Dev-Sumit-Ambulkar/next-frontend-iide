"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Learners() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,to make a type specimen book. It has survived not only five centuries",
      author: "Person 1",
      title: "Title 1",
      imagePath: "/assets/nxt_assets/actor-1.jpg"
    },
    {
      quote: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.",
      author: "Person 2",
      title: "Title 2",
      imagePath: "/assets/nxt_assets/actor-2.jpg"
    },
    {
      quote: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000.",
      author: "Person 1",
      title: "Title 1",
      imagePath: "/assets/nxt_assets/actor-3.jpg"
    },
  ];

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id='learn' className="bg-gray-900 py-2">
      <div className="container mx-auto max-w-6xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden mr-8 md:mr-16">
            <Image
              src={testimonials[activeIndex].imagePath}
              alt={testimonials[activeIndex].author}
              width={300}
              height={300}
              layout="responsive"
              className="object-cover rounded-full"
              style={{ border: 'solid white 4px;'}}
            />
          </div>

          <div className="text-white">
            <p className="text-xl font-medium p-2 lg:p-4">{testimonials[activeIndex].quote}</p>
            <p className="mt-4 text-lg px-2 lg:px-4">- {testimonials[activeIndex].author}, {testimonials[activeIndex].title}</p>
            <div className="flex mt-8 px-2 lg:px-4">
          <button onClick={handlePrev} className="bg-gray-800 hover:bg-customBlue text-white font-medium py-2 px-4 rounded">
            Prev
          </button>
          <button onClick={handleNext} className="bg-gray-800 hover:bg-customBlue text-white font-medium py-2 px-4 rounded ml-4">
            Next
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}