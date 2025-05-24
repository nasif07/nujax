"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Container from "../Container";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unused products in original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days depending on your location.",
  },
  {
    question: "Is customer support available 24/7?",
    answer:
      "Yes! Our support team is available around the clock via chat and email.",
  },
  {
    question: "Can you help with Instagram video editing?",
    answer:
      "Yes! Our support team is available around the clock via chat and email.",
  },
  {
    question: "What make your company different?",
    answer:
      "Yes! Our support team is available around the clock via chat and email.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background:
                "radial-gradient(400.52% 215.22% at -30.93% 148.46%, #373A42 6.7%, #000205 100%)",
              border: "2px solid #2B2E35",
            }}
            className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 max-w-6xl mx-auto">
            <button
              className="flex justify-between items-center w-full text-left font-medium text-lg"
              onClick={() => toggleFAQ(index)}>
              <span className="text-white font-semibold text-2xl">
                {index + 1}. {faq.question}
              </span>
              {activeIndex === index ? (
                <FiChevronUp className="w-5 h-5 text-white" />
              ) : (
                <FiChevronDown className="w-5 h-5 text-white" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}>
              <p className="text-gray-300 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQ;
