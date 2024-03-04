import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.jpg";

const AboutMe = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-transparent py-6">
      <div className="w-full items-center mx-auto max-w-screen-lg p-12">
        <div className="font-steel group grid w-full grid-cols-2">
          <div>
            <div className="p-12 pr-0 mt-4">
              <p className="peer mb-6 text-white text-xl">
                Simply Air Conditioning London are fixed system heating and air
                conditioning installation specialists. Because we’ve tested all
                heating and air conditioning unit manufacturers before using
                them there are no hidden surprises for our customers. We only
                supply air conditioning units from the leading manufacturers so
                any system we fit will be of the highest quality. We also
                thoroughly test every type of unit before supplying..
              </p>
              <div className="mt-6 mb-3 flex gap-6 md:!gap-8 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-4xl font-bold text-[#adff00]">art</p>
                  <p className="text-l font-normal text-white">Hobby</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-4xl font-bold text-[#adff00]">7</p>
                  <p className="text-l font-normal text-white">
                    Countries lived
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-4xl font-bold text-[#adff00]">archery</p>
                  <p className="text-l font-normal text-white">
                    Favorite Sport
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-4xl font-bold text-[#adff00]">100:0</p>
                  <p className="text-l font-normal text-white">Debug Streak</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-16 relative flex items-end flex-col overflow-hidden">
            <div className="absolute top-0 left-12 bg-[#adff00] w-[275px] p-8 flex flex-col justify-center rounded-xl transition-all items-center justify-center">
              <span className="font-custom block text-[30px] text-black font-bold">
                Hi, I'm Akma
              </span>
            </div>
            <motion.a
              whileHover={{ scale: 0.9 }}
              className="font-basic text-white text-[20px] flex mt-2 mb-2 items-center hover:text-[#adff00]"
              href="https://github.com/akmarzhan1/"
            >
              <span className="hover:text-[#adff00]">→ check github</span>
            </motion.a>
            <div className="rounded-xl border border-white border-solid border-2 w-[350px] h-[350px] p-6 ">
              <img className="rounded-xl" src={profilePic} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
