import profilePic from "./assets/profilePic.jpg";
import { FunFacts } from "./components/FunFacts";

export const welcomeMessage = (
  <span>
    Welcome! Type <strong>help</strong> for command list
    <br />
    <br />
  </span>
);

export const helpMessage = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-[auto,1fr] gap-4">
        <div className="font-bold text-lime-400">about</div>
        <div className="text-left">Want to find out more about me?</div>

        <div className="font-bold text-lime-400">projects</div>
        <div className="text-left">Browse some fun projects I made</div>

        <div className="font-bold text-lime-400">tech</div>
        <div className="text-left">What type of tech stack am I using?</div>

        <div className="font-bold text-lime-400">send &lt;message&gt;</div>
        <div className="text-left">
          Send me an email with the &lt;message&gt;
        </div>

        <div className="font-bold text-lime-400">disco</div>
        <div className="text-left">Take a break from work</div>
      </div>
    </div>
  );
};

export const aboutMe = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-8 flex mt-6 flex-col items-center">
      <div className="flex items-center mb-6">
        <div className="w-40 h-40 rounded-lg bg-white overflow-hidden flex-shrink-0">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="ml-8">
          <h2 className="text-3xl font-bold text-lime-400 mb-4">About me</h2>
          <p className="text-white">
            Hi, I am Akma! I am a full stack software engineer based in San
            Francisco. I like to create fun, practical coding experiences and am
            a huge boba, art, and anime fan. Check out some fun facts below ^_^
          </p>
        </div>
      </div>

      <FunFacts />
    </div>
  );
};
