import React, { useEffect, useState } from "react";
import CenteredText from "../components/CenteredText";
import AnimatedCursor from "react-animated-cursor";
import {
  DatasetName,
  DatasetType,
  diagonalDataset,
  heart,
  letterA,
  originalDataset,
  rainbowDataset,
} from "./constants";
import AnimatedPoint from "../components/AnimatedPoint";
import "../fonts.css"; // Import the font CSS file
import Experience, { AllowedPhotoType } from "../components/Experience";
import { AnimatePresence, motion } from "framer-motion";
import ProjectDisplay from "../components/ProjectDisplay";

const MainScreen: React.FC = () => {
  const [dataset, setDataset] = useState(originalDataset);
  const [showIntro, setShowIntro] = useState(true);
  const [showWork, setShowWork] = useState(false);
  const [showProjectDisplay, setShowProjectDisplay] = useState(false);
  const [currentProject, setCurrentProject] =
    useState<keyof typeof AllowedPhotoType>("nothing");

  const [dataState, setDataState] = useState<DatasetName>("scatter");
  const scatterMap: { [key in DatasetName]: DatasetType[] } = {
    scatter: originalDataset,
    diagonal: diagonalDataset.concat(diagonalDataset),
    letterA: letterA,
    heart: heart.concat(heart).concat(heart),
    rainbow: rainbowDataset,
    big: originalDataset.concat(originalDataset),
  };

  useEffect(() => {
    const newDataset = scatterMap[dataState];
    setDataset(newDataset);
  }, [dataState]);

  return (
    <div className="flex justify-center items-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-700 via-slate-700 to-stone-100">
      <AnimatedCursor
        innerSize={8}
        outerSize={18}
        color="163, 230, 53"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={3}
      />
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            exit={{ opacity: 0, x: 400 }}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <CenteredText
              onPress={setDataState}
              onSeeProjects={() => {
                setShowIntro(false);
                setShowWork(true);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="noise" />

      <AnimatePresence>
        {showWork && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 20 }}
          >
            <Experience
              onClick={(project: keyof typeof AllowedPhotoType) => {
                setCurrentProject(project);
                setShowWork(false);
                setShowProjectDisplay(true);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showProjectDisplay && (
          <motion.div
            initial={{ opacity: 0, y: 600 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 20 }}
          >
            <ProjectDisplay currentProject={currentProject} />
          </motion.div>
        )}
      </AnimatePresence>
      <svg
        viewBox="0 0 100 55"
        style={{ backgroundColor: "transparent", position: "absolute" }}
      >
        {dataset.map(({ x, y, color }, index) => (
          <AnimatedPoint
            key={index}
            x={x}
            y={y}
            color={color}
            state={dataState}
          />
        ))}
      </svg>
    </div>
  );
};

export default MainScreen;
