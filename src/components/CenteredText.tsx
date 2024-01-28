import { DatasetName } from "../screens/constants";

const CenteredText = ({
  onPress,
  onSeeProjects,
}: {
  onPress: (state: DatasetName) => void;
  onSeeProjects: () => void;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className=" mx-auto text-center max-w-screen-md">
        <h1 className="font-custom flex leading-10 text-[#EAE0DA] text-center sm:leading-none text-6xl sm:text-8xl text-white hover:brightness-110 transition-all duration-300">
          <span className="inline md:block">hi, I'm</span>
          <span
            className="rainbow-text relative ml-4 bg-clip-text text-white md:inline-block"
            onMouseEnter={() => onPress("rainbow")}
            onMouseOut={() => onPress("scatter")}
          >
            Akma
          </span>
        </h1>
        <h1 className="font-basic leading-10 text-[#EAE0DA] text-center sm:leading-none text-[36px] sm:text-[24px] text-white">
          <span className="inline md:block">Full-stack Software Engineer</span>
        </h1>
        <div className="flex font-basic text-[16px] justify-center items-center mt-6">
          <button className="relative overflow-hidden focus:outline-none group">
            <span className="relative z-10 text-white" onClick={onSeeProjects}>
              → see work
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EAE0DA] origin-left transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
          </button>
          <button className="relative overflow-hidden focus:outline-none group ml-6">
            <span className="relative z-10 text-white">→ more about me</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EAE0DA] origin-left transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenteredText;
