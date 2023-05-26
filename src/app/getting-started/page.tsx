"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqData = [
  {
    question: "Lorem ipsum dolor sit",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit fugiat temporibus quisquam nesciunt, at accusantium voluptate eos commodi voluptas, iure provident aperiam maiores delectus consequuntur animi in numquam!",
  },
  {
    question: "Excepturi suscipit fugiat temporibus quisquam nesciunt?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sint? Animi, voluptate? Voluptas natus aliquid quae, porro assumenda commodi quod quisquam ab reiciendis quia nihil fugiat cum laborum corporis perspiciatis.",
  },
  {
    question: "Deserunt, sint? Animi, voluptate??",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, distinctio eligendi dolorem ea, vero nobis dolores inventore iste debitis perferendis tempore, recusandae commodi fugiat totam architecto aliquam accusamus eius incidunt.",
  },
  {
    question: "Lorem ipsum dolor sit",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit fugiat temporibus quisquam nesciunt, at accusantium voluptate eos commodi voluptas, iure provident aperiam maiores delectus consequuntur animi in numquam!",
  },
  {
    question: "Excepturi suscipit fugiat temporibus quisquam nesciunt?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sint? Animi, voluptate? Voluptas natus aliquid quae, porro assumenda commodi quod quisquam ab reiciendis quia nihil fugiat cum laborum corporis perspiciatis.",
  },
  {
    question: "Deserunt, sint? Animi, voluptate??",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, distinctio eligendi dolorem ea, vero nobis dolores inventore iste debitis perferendis tempore, recusandae commodi fugiat totam architecto aliquam accusamus eius incidunt.",
  },
  {
    question: "Lorem ipsum dolor sit",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit fugiat temporibus quisquam nesciunt, at accusantium voluptate eos commodi voluptas, iure provident aperiam maiores delectus consequuntur animi in numquam!",
  },
  {
    question: "Excepturi suscipit fugiat temporibus quisquam nesciunt?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sint? Animi, voluptate? Voluptas natus aliquid quae, porro assumenda commodi quod quisquam ab reiciendis quia nihil fugiat cum laborum corporis perspiciatis.",
  },
  {
    question: "Deserunt, sint? Animi, voluptate??",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, distinctio eligendi dolorem ea, vero nobis dolores inventore iste debitis perferendis tempore, recusandae commodi fugiat totam architecto aliquam accusamus eius incidunt.",
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
