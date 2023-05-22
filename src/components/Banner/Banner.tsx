import Link from "next/link";
import { useState } from "react";

function Banner() {
  const [isBannerActive, setIsBannerActive] = useState(true);

  const bannerHandler = () => {
    setIsBannerActive(false);
  };

  if (!isBannerActive) {
    return <></>;
  }

  return (
    <div className="mt-20">
      <div
        tabIndex={-1}
        className="fixed top-0 left-0 z-50 flex justify-between w-full p-4 bg-gray-700 border-gray-600"
      >
        <div className="flex items-center mx-auto">
          <p className="flex items-center text-sm font-normal text-gray-400">
            <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-blue-400 border border-blue-400">
              Devolopment
            </span>
            <span>
              Please consider leaving your feedback.{" "}
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSf72D_wqHHO8cCADyUOaFvXqY2-K9MLmIfcV5JoDJLbjLxQ4g/viewform"
                className="flex items-center ml-0 text-sm font-medium md:ml-1 md:inline-flex text-blue-500 hover:underline"
              >
                Feedback Form{" "}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-1 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <button
            onClick={bannerHandler}
            className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 rounded-lg text-sm p-1.5 hover:bg-gray-600 hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
