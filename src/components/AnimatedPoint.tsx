import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DatasetName } from "../screens/constants";

type AnimatedPointProps = {
  x: number;
  y: number;
  color: string;
  state: DatasetName;
};
const AnimatedPoint = (props: AnimatedPointProps) => {
  const { x, y, color, state } = props ?? {};
  const lineAnimationControls = useAnimation();
  const circleAnimationControls = useAnimation();
  const reboundCircleAnimationControls = useAnimation();

  const generateRandomData = () => {
    const radiusCap = state === "scatter" ? 5 : 0.5;
    const rainDurationCap = state === "scatter" ? 1 : 0.5;
    const dropDurationCap = state === "scatter" ? 2.5 : 1;
    return {
      radius: Math.random() * radiusCap + 1,
      dropDuration: Math.random() * dropDurationCap + 1,
      strokeWidth: Math.random() * 0.2 + 0.1,
      rainDuration: Math.random() * rainDurationCap + 0.5,
    };
  };

  const [data, setData] = useState(generateRandomData());
  //   console.log(data);
  const moveAnimation = () => {
    circleAnimationControls.start({
      cx: x,
      cy: y,
      transition: { duration: 1 },
    });
    reboundCircleAnimationControls.start({
      cx: x,
      cy: y,
      transition: { duration: 1 },
    });
  };

  const isAnimationInProgress = useRef(false);

  useEffect(() => {
    const init = async () => {
      moveAnimation();
      if (!isAnimationInProgress.current) {
        await animateElements();
        setData(generateRandomData());
      }
    };
    init();
  }, [x, y, data]);

  const animateElements = async () => {
    isAnimationInProgress.current = true;
    lineAnimationControls.start({
      opacity: [0, 1],
      y1: [y - 30, y],
      y2: [y - 23, y],
      transition: {
        duration: data.rainDuration,
        // repeat: Infinity,
        // repeatType: "restart",
        // repeatDelay: dropDuration + 0.5
      },
    });

    circleAnimationControls.start({
      r: [0, data.radius],
      transition: {
        duration: data.dropDuration + 1,
        type: "spring",
        delay: data.rainDuration - 0.5,
        // repeat: Infinity,
        // repeatType: "restart",
        // repeatDelay: rainDuration - 0.5,
        damping: 10,
        stiffness: 100,
      },
      opacity: [1, 0],
      strokeWidth: [0.05, data.strokeWidth],
    });

    // console.log(data);

    await reboundCircleAnimationControls.start({
      r: [0, data.radius],
      transition: {
        duration: data.dropDuration,
        delay: data.rainDuration + 0.5,
        type: "linear",
        // repeat: Infinity,
        // repeatType: "restart",
        // repeatDelay: rainDuration + 0.5,
      },
      opacity: [1, 0],
      strokeWidth: [0.05, 0.1],
    });

    isAnimationInProgress.current = false;
  };

  return (
    <>
      {/* <motion.circle stroke="white" strokeWidth={2} /> */}
      <motion.line
        x1={x}
        y1={y - 30}
        x2={x}
        y2={y - 23}
        stroke="white"
        strokeWidth={0.2}
        style={{ transform: "rotateX(45deg)" }}
        animate={lineAnimationControls}
      />
      <motion.circle
        cx={x}
        cy={y}
        stroke={color}
        fill="transparent"
        animate={circleAnimationControls}
        style={{ transform: "rotateX(45deg)" }}
      />
      <motion.circle
        cx={x}
        cy={y}
        stroke={color}
        fill="transparent"
        animate={reboundCircleAnimationControls}
        style={{ transform: "rotateX(45deg)" }}
      />
    </>
  );
};

export const customDamping = (progress: number) => {
  return progress < 0.2 ? 10 : 10 * (1 - progress);
};

export default AnimatedPoint;
