import { ReactTerminal } from "react-terminal";
import { aboutMe, helpMessage, welcomeMessage } from "./messages";

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
  );
}

export default App;
