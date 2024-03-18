// import React, { useState } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion";

// const wrapperVariants: Variants = {
//   initial: {
//     clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
//     transition: { duration: 0.4 },
//   },
//   animate: {
//     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
//     transition: { duration: 0.4, staggerChildren: 0.1 },
//   },
//   exit: {
//     clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
//     transition: { duration: 0.4 },
//   },
// };

// const squareVariants: Variants = {
//   initial: {
//     opacity: 0,
//     scale: 0.3,
//   },
//   animate: {
//     opacity: 1,
//     scale: 1,
//   },
// };

// const Projects: React.FC = () => {
//   const [selectedSquare, setSelectedSquare] = useState<string | null>(null);

//   const renderSquares = () => {
//     const squares = ["yellow", "green", "blue", "violet"];
//     return squares.map((color, i) => (
//       <motion.div
//         key={i}
//         className={`bg-gradient-to-br from-${color}-500 via-${color}-400 to-${color}-600 h-70 w-70 m-15 rounded-15 shadow-md transition-transform cursor-pointer`}
//         onClick={() => setSelectedSquare(color)}
//         variants={squareVariants}
//         transition={{ duration: 0.2, type: "spring" }}
//       />
//     ));
//   };

//   return (
//     <div className={`h-full w-full relative min-h-[250px]`}>
//       <AnimatePresence>
//         {selectedSquare ? (
//           <motion.div
//             className={`bg-gradient-to-br from-${selectedSquare}-500 via-${selectedSquare}-400 to-${selectedSquare}-600 absolute top-0 left-0 w-full h-full p-30 grid grid-cols-1 grid-rows-[min-content,1fr] gap-20`}
//             key="card"
//             variants={wrapperVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <div className="flex justify-between items-center">
//               <h2 className="text-3.2rem font-bold text-white">Lorem ipsum</h2>
//               <button
//                 onClick={() => setSelectedSquare(null)}
//                 className="text-white border-none bg-transparent cursor-pointer focus:outline-none"
//               >
//                 <i className="fas fa-times fa-2x" />
//               </button>
//             </div>
//             <div className="grid gap-30 grid-cols-[min-content,1fr] align-content-center">
//               <div
//                 className={`bg-opacity-70 bg-white h-175 w-175 rounded-full`}
//               >
//                 {/* Image content goes here */}
//               </div>
//               <div className="text-justify leading-[125%] text-1.6rem text-white">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
//                 ea neque quidem exercitationem possimus.
//               </div>
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             className="flex h-full w-full justify-center items-center bg-white"
//             key="squares"
//             variants={wrapperVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             {renderSquares()}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Projects;
