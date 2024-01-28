import { useState } from "react";
import { motion } from "framer-motion";
import {
  AllowedPhotoType,
  workToPath,
  workToPlace,
} from "../screens/constants";

const ProjectDisplay = (props: {
  currentProject: keyof typeof AllowedPhotoType;
}) => {
  const { currentProject } = props;

  return (
    <div className="flex items-center justify-center">
      {/* Right part */}
      <div className="flex-grow p-4 w-[700px]">
        {/* Your content for the right part */}
        <p className="font-custom pl-4 pr-4 text-6xl text-white flex justify-between">
          <span>WORK</span>
          <span>8</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectDisplay;
