import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.jpg";

const AboutMe = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-transparent py-6 mt-[100px] md:mt-0">
      <div className="w-full items-center mx-auto max-w-screen-lg p-12">
        <div className="font-steel group grid w-full lg:grid-cols-2 grid-cols-1 mx-auto">
          <div>
            <div className="lg:p-12 lg:pr-0 mt-4 p-4">
              <p className="peer mb-6 text-white text-xl">
                {`Hi I am Akma! I am a software engineer who always likes trying
                out new fun projects. I enjoy doing full stack and prefer
                backend. I also like drawing, playing the guitar and just deeply
                discussing serious matters like Barbie or Oppenheimer. Check out
                my GitHub and some projects I've worked on!`.toLowerCase()}
              </p>
              <div className="mt-6 mb-2 group grid gap-6 items-center justify-center lg:grid-cols-4 grid-cols-2">
                <div className="flex flex-col items-center justify-center mt-2 lg:mt-0">
                  <p className="text-4xl font-bold text-[#adff00]">art</p>
                  <p className="text-l font-normal text-white">Hobby</p>
                </div>
                <div className="flex flex-col items-center justify-center mt-2 lg:mt-0">
                  <p className="text-4xl font-bold text-[#adff00]">7</p>
                  <p className="text-l font-normal text-white">
                    Countries lived
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center mt-2 lg:mt-0">
                  <p className="text-4xl font-bold text-[#adff00]">archery</p>
                  <p className="text-l font-normal text-white">
                    Favorite Sport
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center mt-2 lg:mt-0">
                  <p className="text-4xl font-bold text-[#adff00]">100:0</p>
                  <p className="text-l font-normal text-white">Debug Streak</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pr-12 relative flex items-end flex-col overflow-hidden mx-auto">
            <div className="md:w-[350px] md:h-[350px] w-[300px] h-[300px] lg:p-8 p-10 -mt-8 lg:mt-5">
              <img className="rounded-xl" src={profilePic} />
            </div>
            <motion.a
              whileHover={{ scale: 0.9 }}
              className="font-basic text-white text-[20px] flex mb-2 items-center hover:text-[#adff00] pr-10 mt-[-10px]"
              onClick={() =>
                window.open("https://github.com/akmarzhan1/", "_blank")
              }
            >
              <span className="hover:text-[#adff00]">→ check github</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
//overflow y
