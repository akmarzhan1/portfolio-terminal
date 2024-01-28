import { useState } from "react";
import { motion } from "framer-motion";
import {
  AllowedPhotoType,
  workToPath,
  workToPlace,
} from "../screens/constants";

const Experience = (props: {
  onClick: (project: keyof typeof AllowedPhotoType) => void;
}) => {
  const [photo, setPhoto] = useState<keyof typeof AllowedPhotoType>("nothing");

  return (
    <div className="flex items-center justify-center">
      <div className="flex-none w-2/5 p-4">
        {photo !== "nothing" && (
          <motion.img
            key={photo}
            animate={{ scale: [0.8, 1.1, 1], opacity: [0.8, 1] }}
            transition={{ duration: 1 }}
            style={{ borderRadius: 20 }}
            src={workToPath?.[photo]}
            width="400px"
            height="300px"
            alt="Description of the photo"
          />
        )}
      </div>

      {/* Right part */}
      <div className="flex-grow p-4 w-[700px]">
        {/* Your content for the right part */}
        <p className="font-custom pl-4 pr-4 text-6xl text-white flex justify-between">
          <span>WORK</span>
          <span>8</span>
        </p>
        <div className="flex-grow p-4 mt-0 h-[400px] overflow-auto scrollbar-hide no-scrollbar">
          <ul>
            {Object.entries(AllowedPhotoType).map(([origKey, value]) => {
              const key = origKey as keyof typeof AllowedPhotoType;
              return (
                <li className="mb-2 rainbow-text mt-2 pt-6 pb-2 text-2xl font-basic border-t-[1px] text-white border-white-300 flex justify-between text-align">
                  <span
                    onMouseEnter={() => {
                      setPhoto(key);
                    }}
                    onClick={() => props.onClick(key)}
                  >
                    {photo === key && "→"} {value}
                  </span>
                  <span className="text-white font-steel">
                    {workToPlace[key]}
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
