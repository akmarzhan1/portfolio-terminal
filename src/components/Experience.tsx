import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  AllowedPhotoType,
  descriptions,
  workToName,
  workToPath,
  workToTags,
  workToTech,
} from "../screens/constants";

const Experience = () => {
  const [photo, setPhoto] = useState<keyof typeof AllowedPhotoType>("nothing");
  const containerRef = useRef<HTMLDivElement>(null); // Define the type of containerRef

  // Function to reset scroll position
  const resetScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  useLayoutEffect(() => {
    resetScroll();
  }, [photo]);

  return (
    <div className="w-screen flex items-center justify-center">
      <div
        ref={containerRef}
        className="fade w-[500px] p-4 mt-10 justify-center items-center h-[475px] overflow-scroll scrollbar-hide no-scrollbar"
      >
        {photo != "nothing" && (
          <motion.div
            key={photo + "vert"}
            className="items-center justify-center flex float-left"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute left top-0 bottom-0 w-[1px] bg-gray-200" />
          </motion.div>
        )}

        {photo != "nothing" && (
          <motion.img
            key={photo}
            animate={{ scale: [0.8, 0.95, 0.9], opacity: [0.8, 1] }}
            transition={{ duration: 1 }}
            style={{ borderRadius: 20 }}
            src={workToPath?.[photo]}
            width="450px" // Fixed width for photo
            height="300px" // Fixed height for photo
            alt="Description of the photo"
          />
        )}

        {photo != "nothing" && (
          <motion.div
            key={photo + "title"}
            className="font-basic text-white pt-2 pl-6 text-[24px] flex float-top"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {workToName?.[photo]}
          </motion.div>
        )}

        {photo != "nothing" && (
          <motion.div
            key={photo + "text"}
            className="p-4 font-steel mt-[-10px]"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.5 }}
          >
            <div className="m-0 p-1 flex flex-wrap">
              {workToTech[photo].map((item, index) => (
                <span
                  key={index}
                  className="m-1 text-white font-steel border border-[#adff00] border-solid border-1 rounded-[10px] p-[0.4] pl-2 pr-2 text-[16px]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="font-steel text-[20px] text-white p-2">
              {descriptions[photo]}
            </div>

            <div className="flex flex-wrap">
              <motion.div
                className="p-3 pl-1 w-[100px] mb-8 mt-[-12px]"
                onClick={() => window.open("https://github.com", "_blank")}
                whileHover={{ scale: 1.1 }}
              >
                <span className="m-1 text-white font-steel border border-[#adff00] border-solid border-1 rounded-[10px] pl-2 pr-2 text-[20px] items-center justify-center flex">
                  <svg
                    className="w-4 h-4 text-[#adff00]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                    <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                  </svg>
                  <span className="font-steel ml-2 mt-1 text-white">visit</span>
                </span>
              </motion.div>

              <motion.div
                className="p-3 w-[120px] mb-8 mt-[-12px] ml-[-20px]"
                onClick={() => window.open("https://github.com", "_blank")}
                whileHover={{ scale: 1.1 }}
              >
                <span className="m-1 text-white font-steel border border-[#adff00] border-solid border-1 rounded-[10px] pl-2 pr-2 text-[20px] items-center justify-center flex">
                  <svg
                    className="w-4 h-4 text-[#adff00]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 3 6 2V1m5 2 1-1V1M9 7v11M9 7a5 5 0 0 1 5 5M9 7a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H12V6a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 9 7Zm-5 5H1m3 0v2a5 5 0 0 0 10 0v-2m3 0h-3m-9.975 4H2a1 1 0 0 0-1 1v2m13-3h2.025a1 1 0 0 1 1 1v2M13 9h2.025a1 1 0 0 0 1-1V6m-11 3H3a1 1 0 0 1-1-1V6"
                    />
                  </svg>
                  <span className="font-steel ml-2 mt-1 text-white">
                    github
                  </span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Right part */}
      <div className="w-[450px] p-4 flex-none">
        {/* Your content for the right part */}
        <p className="font-basic pl-4 pr-4 text-5xl text-white flex justify-between">
          <span>WORK</span>
          <span>{Object.entries(AllowedPhotoType).length - 1}</span>
        </p>
        <div className="p-4 h-[400px] overflow-auto scrollbar-hide no-scrollbar items-center">
          <ul>
            {Object.entries(AllowedPhotoType).map(([origKey, value]) => {
              const key = origKey as keyof typeof AllowedPhotoType;
              return (
                <li
                  className={`mb-2 flex items-center rainbow-text mt-2 pt-6 pb-2 text-2xl font-basic border-t-[1px] ${
                    key == photo ? "text-[#adff00]" : "text-white"
                  } border-white-300 flex justify-between text-align`}
                >
                  <span onClick={() => setPhoto(key)}>{value}</span>
                  <span className="m-0">
                    {key != "nothing" &&
                      workToTags[key].map((item) => (
                        <span className="ml-2 text-white font-steel border border-white border-solid border-1 rounded-xl p-1 pl-2.5 pr-2.5 text-[18px]">
                          {item}
                        </span>
                      ))}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

// dynamic resizing
// polish in code
// polish each section in terms of experience
// add the rain animations
// fix the photo loading
// add upper overall website navigation
// react navigation
