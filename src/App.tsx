import { ReactTerminal } from "react-terminal";
import { aboutMe, helpMessage, welcomeMessage } from "./messages";

// TODO: try it out in different sizes and adjust the font and etc
// TODO: make the website dynamically resizable

function App() {
  const commands = {
    help: () => helpMessage(),
    about: () => aboutMe(),
    // TODO: email js and save the secret keys in secrets manager on aws
    send: (input: string) => {
      if (input == "") return "You need to specify a message!";
      return "Sent!";
    },
  };

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[70vh] w-[80vw] overflow-auto rounded-[10px]">
          <ReactTerminal
            commands={commands}
            prompt="akma:~$"
            welcomeMessage={welcomeMessage}
            themes={{
              akma: {
                themeBGColor: "#2d3748",
                themeToolbarColor: "#2d3748",
                themeColor: "#FFFEFC",
                themePromptColor: "#A78BFA",
              },
            }}
            theme="akma"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
