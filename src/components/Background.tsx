import { motion, useAnimation } from "framer-motion";

const WavyLineAnimation = () => {
  const controls = useAnimation();

  const startAnimation = async () => {
    // Animate the line's path data for a wavy effect
    await controls.start({
      d: "M0,50 C50,100 150,0 200,50 C250,100 350,0 400,50 C450,100 550,0 600,50 C650,100 750,0 800,50 L800,100 L0,100 Z",
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
    });
  };

  return (
    <div className="w-full h-40">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 100"
      >
        <motion.path
          d="M0,50 C50,100 150,0 200,50 C250,100 350,0 400,50 C450,100 550,0 600,50 C650,100 750,0 800,50 L800,100 L0,100 Z"
          fill="url(#gradient)"
          initial={{
            d: "M0,100 L0,100 L0,100 L0,100 L0,100 L0,100 L0,100 L0,100 L0,100 L0,100",
          }} // Initial path data
          animate={controls}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "rgba(255, 0, 0, 0.7)" }} />
            <stop offset="100%" style={{ stopColor: "rgba(0, 0, 255, 0.7)" }} />
          </linearGradient>
        </defs>
      </svg>
      <button
        onClick={startAnimation}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none"
      >
        Start Animation
      </button>
    </div>
  );
};

export default WavyLineAnimation;
