"use client";
import { useState } from 'react';

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqData = [
    {
      question: 'What are the two certifications offered by IIDE?',
      answer: 'IIDE offers two certification tracks under our online digital marketing course : Advanced Certification in Digital Marketing & Professional Certification in Digital Marketing & Strategy. To understand the difference between the two, click here.',
    },
    {
      question: 'What is the difference between Advanced Certification and Professional Certification?',
      answer: 'The main difference between the Advance Certification in Digital Marketing and the Professional Certification in Digital Marketing lies in the learning experience and knowledge it provides to the learners. The Advance Certification in Digital Marketing is a 4-month program primarily preferred by college students, freshers, small business owners, and influencers. It does not specifically cover agency and leadership skills but does provide a holistic understanding of digital marketing. On the other hand, the Professional Certification in Digital Marketing is a 6-month program primarily preferred by working professionals, agency owners, and freelancers. This course includes a focus on agency and leadership skills and provides simulations from the Harvard Business Review along with focus on digital marketing. For a more detailed comparison of both certifications, click here.',
    },
    {
        question: 'What is the eligibility criteria for both certification programs?',
        answer: 'ACDM- The eligibility criteria is a 12th Grade Pass (10+2) with a minimum of 50% marks in aggregate or equivalent. However, any individual who is 16 years and above can also apply for the program. PCDMS- The eligibility criteria is a Graduation in any field with a minimum of 50% marks in aggregate or equivalent. However, any individual who is 22 years and above can also apply for the program.',
      },
      {
        question: 'I am a digital marketer with 1-2 years of work experience.. How will this course help me?',
        answer: 'Being a working professional in the digital marketing industry, you know how rapidly trends change. Hence, there is always a knowledge gap between what you know & what’s happening in the industry. This course will help you stay updated & understand how modern digital marketing works. Also, this is a great opportunity for you to demand a better salary package & promotion during your annual appraisal review. If you already know the basics of digital marketing, we recommend you to choose the Professional Certification in Digital Marketing & Strategy.',
      },
      {
        question: ' I am a college student & want to make a career in digital marketing. How will this course help me?',
        answer: 'If you want to make a career in digital marketing, this course helps you to master digital marketing concepts and skills that are in demand. Additionally, with IIDE’s placement training & placement assistance, you will get placed smoothly.',
      },
      {
        question: 'What is the salary package I can expect after completing the program?',
        answer: 'What is the salary package I can expect after completing the program?',
      }
  ];

  return (
    <div id='faq' className="container mx-auto px-4 py-16 max-w-6xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              className="w-full px-4 py-3 flex justify-between items-center text-left"
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              <svg
                className={`w-6 h-6 transition-transform transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 bg-gray-50">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}