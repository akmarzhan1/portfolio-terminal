type RepeatType = "reverse" | "mirror" | "loop" | undefined;

export const FUN_FACTS_VARIANTS = {
  initial: {
    scale: 1,
    backgroundColor: "#84CC16",
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  hover: {
    backgroundColor: [
      "#F97316",
      "#EAB308",
      "#22C55E",
      "#14B8A6",
      "#0EA5E9",
      "#6366F1",
      "#A855F7",
    ],
    scale: 0.9,
    transition: {
      delay: 0.5,
      duration: 5,
      ease: [0.2, 0.82, 0.165, 1],
      repeat: Infinity,
      repeatType: "reverse" as RepeatType,
    },
  },
  rotate: {
    rotateY: 180,
    backgroundColor: "#8B5CF6",
    scale: 1,
    transition: { duration: 0.35 },
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
};

export const FUN_FACTS = [
  { prompt: "Countries I visited", number: 15 },
  { prompt: "LeetCode problems I solved", number: 377 },
  { prompt: "Countries I studied in", number: 7 },
  { prompt: "Bobas I've consumed", number: 8736 },
];
