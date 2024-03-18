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
import Experience from "../components/Experience";
import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "../components/AboutMe";
import Navigation from "../components/Navigation";
import { NavigationType } from "./types";

const MainScreen: React.FC = () => {
  const [dataset, setDataset] = useState(originalDataset);
  const [navigation, setNavigation] = useState<NavigationType>("home");

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

  const fadeInAnimation = {
    opacity: [0, 1],
    x: [-250, 0],
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.25,
    },
  };

  const fadeOutAnimation = {
    opacity: [1, 0],
    x: [0, 250],
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0,
    },
  };

  const initialAnimation = { opacity: 0, x: -250 };
  const [isScreenWidthSmall, setIsScreenWidthSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWidthSmall(window.innerWidth < 400); // Adjust the threshold as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen width
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const WarningMessage = () => {
    return (
      <div className="absolute flex mx-auto justify-center items-center h-screen">
        <div className="font-steel bg-[#adff00] text-xl text-black p-4 z-10 rounded-xl p-8 m-16">
          screen width is too small. resize to continue.
        </div>
      </div>
    );
  };

  return (
    <div className="absolute w-screen h-screen overflow-hidden">
      {isScreenWidthSmall && <WarningMessage />}
      <div
        className={`flex justify-center items-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-700 via-slate-700 to-stone-100 ${
          isScreenWidthSmall && "blur"
        }`}
      >
        <div className="absolute top-10" style={{ zIndex: 25 }}>
          <Navigation currentNavigation={navigation} onPress={setNavigation} />
        </div>
        <AnimatedCursor
          innerSize={8}
          outerSize={18}
          color="163, 230, 53"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={3}
        />

        <AnimatePresence>
          {navigation == "home" && (
            <motion.div
              initial={initialAnimation}
              animate={fadeInAnimation}
              exit={fadeOutAnimation}
              style={{ position: "absolute", zIndex: 1 }}
            >
              <CenteredText
                onPress={setDataState}
                onSeeProjects={() => {
                  setNavigation("work");
                }}
                onSeeAboutMe={() => {
                  setNavigation("about me");
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="noise" />

        <AnimatePresence>
          {navigation == "work" && (
            <motion.div
              initial={initialAnimation}
              animate={fadeInAnimation}
              exit={fadeOutAnimation}
              style={{ position: "absolute", zIndex: 1 }}
            >
              <Experience />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {navigation == "about me" && (
            <motion.div
              initial={initialAnimation}
              animate={fadeInAnimation}
              exit={fadeOutAnimation}
              style={{ position: "absolute", zIndex: 1 }}
            >
              <AboutMe />
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
    </div>
  );
};

export default MainScreen;
