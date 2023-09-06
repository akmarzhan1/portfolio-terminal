import { useState } from "react";
import { FUN_FACTS, FUN_FACTS_VARIANTS } from "../constants";
import { Counter } from "./Counter";
import { motion } from "framer-motion";

export const FunFacts = () => {
  const [facts, setFacts] = useState<{ [key in number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const updatePressed = (index: number) => {
    setFacts((pressed) => ({
      ...pressed,
      [index]: !pressed[index],
    }));
  };

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-grow">
        {FUN_FACTS.map((funFact, index) => (
          <motion.div
            key={index}
            className="aspect-[1/1] h-auto bg-lime-500 rounded-md flex justify-center items-center text-white font-semibold text-xl flex-grow flex-shrink-0"
            variants={FUN_FACTS_VARIANTS}
            whileHover="hover"
            initial="initial"
            onClick={() => updatePressed(index)}
            animate={facts[index] ? "rotate" : "initial"}
          >
            {!facts[index] && (
              <motion.div initial={{ opacity: 1 }} className="text-center p-2">
                {funFact.prompt}
              </motion.div>
            )}
            {facts[index] && (
              <motion.div
                animate={facts[index] && { opacity: 1, rotateY: 180 }}
                initial={{ opacity: 0 }}
                className="text-center text-[30px]"
              >
                <Counter key={index} from={0} to={funFact.number} />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
