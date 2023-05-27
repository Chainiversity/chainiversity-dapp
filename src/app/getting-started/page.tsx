"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqData = [
  {
    question: "What is Chainiversity?",
    answer:
      "Chainiversity is a developer quest platform where developers follow the instructions in the level descriptions in order to pass the levels and earn NFT certificates.",
  },
  {
    question: "What does Chainiversity aim for?",
    answer:
      "Chainiversity team aims to create engaging quests for developers so that they can have a practice in how Chainlink and Solidity can be used. In this way, developers will be motivated to learn about Chainlink services and prove their Chainlink and Solidity knowledge with NFT certificates.",
  },
  {
    question: "Who is Chainiversity for?",
    answer:
      "Chainiversity is the most suitable for developers who is at least at an intermediate level. By using Chainlink documentations and tutorials on YouTube, developers can have an idea and some practice about how to use Chainlink services.",
  },
  {
    question: "What if I am a beginner developer? ",
    answer:
      "If you are new to blockchain development, then no problem. There are a lot of ways you can get started. Our suggestion is that you can go from zero to hero level with Patrick Collins’ 32-hour course video in YouTube. You don’t have to watch the whole tutorial to pass the levels, first few hours will help you get started with Chainiversity levels. However, watching the whole tutorial will make you a master!",
  },
  {
    question: "What are the prerequisites for Chainiversity levels?",
    answer:
      "We listed the prerequisites for passing the levels in each level’s descriptions in the “Requirements” part.",
  },
  {
    question: "What are the future plans for Chainiversity?",
    answer:
      "We would like to add more levels for each and different services in order for developers to practice, and to raise awareness about what can be done with Chainlink. Our team is also preparing workshops (online and face-to-face) where some Chainiversity levels are solved.",
  },
  // Add more FAQ items as needed
];

export default function GettingStarted() {
  const toRight = {
    start: {
      x: "-100vw",
    },
    finish: {
      x: 0,
      transition: {
        type: "spring",
      },
    },
  };

  const toLeft = {
    start: {
      x: "100vw",
    },
    finish: {
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
  };

  const toVisible = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="w-full flex items-center flex-col">
      <motion.h1
        variants={toRight}
        initial="start"
        animate="finish"
        className="text-4xl font-bold text-center text-blue-500 my-8"
      >
        F.A.Q
      </motion.h1>
      <motion.p
        variants={toLeft}
        initial="start"
        animate="finish"
        className="text-lg text-gray-500 mb-8"
      >
        Frequently Asked Questions
      </motion.p>
      <motion.div
        variants={toVisible}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl"
      >
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <svg
                className={`w-6 h-6 transition-transform transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
