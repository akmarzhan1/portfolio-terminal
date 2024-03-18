import carepodPic from "../assets/carepod.jpg";
import kpop from "../assets/kpop.png";
import model from "../assets/model.png";
import lexical from "../assets/lexical.jpeg";
import suggest from "../assets/suggest.png";
import timero from "../assets/timero.png";
import cassandra from "../assets/cassandra.jpg";
import bert from "../assets/bert.jpeg";
import blockchain from "../assets/blockchain.png";

const colors = [
  "#BE123C",
  "#86198F",
  "#047857",
  "#B91C1C",
  "#B45309",
  "#4D7C0F",
  "#047857",
  "#0E7490",
  "#1D4ED8",
  "#6D28D9",
  "#A21CAF",
  "#BE123C",
];

export const makeRgbColor = () =>
  colors[Math.ceil(Math.random() * colors.length - 1)];

export const heart: DatasetType[] = [
  // left half
  { x: 67, y: 78, color: makeRgbColor() },
  { x: 66, y: 77, color: makeRgbColor() },
  { x: 65, y: 76, color: makeRgbColor() },
  { x: 64, y: 75, color: makeRgbColor() },
  { x: 63, y: 74, color: makeRgbColor() },
  { x: 62.5, y: 73, color: makeRgbColor() },
  { x: 62, y: 72, color: makeRgbColor() },
  { x: 61.5, y: 71, color: makeRgbColor() },
  { x: 61, y: 70, color: makeRgbColor() },
  { x: 60.5, y: 69, color: makeRgbColor() },
  { x: 60, y: 68, color: makeRgbColor() },
  { x: 60, y: 65, color: makeRgbColor() },
  { x: 60, y: 62, color: makeRgbColor() },
  { x: 61, y: 61, color: makeRgbColor() },
  { x: 61.5, y: 60, color: makeRgbColor() },
  { x: 62, y: 59, color: makeRgbColor() },
  { x: 63, y: 59, color: makeRgbColor() },
  { x: 64, y: 59, color: makeRgbColor() },
  { x: 65, y: 60, color: makeRgbColor() },
  { x: 66, y: 61, color: makeRgbColor() },
  { x: 67, y: 62, color: makeRgbColor() },

  // middle
  { x: 67, y: 64, color: makeRgbColor() },
  { x: 67, y: 63, color: makeRgbColor() },

  // right half
  { x: 68, y: 77, color: makeRgbColor() },
  { x: 69, y: 76, color: makeRgbColor() },
  { x: 70, y: 75, color: makeRgbColor() },
  { x: 71, y: 74, color: makeRgbColor() },
  { x: 71.5, y: 73, color: makeRgbColor() },
  { x: 72, y: 72, color: makeRgbColor() },
  { x: 72.5, y: 71, color: makeRgbColor() },
  { x: 73, y: 70, color: makeRgbColor() },
  { x: 73.5, y: 69, color: makeRgbColor() },
  { x: 74, y: 68, color: makeRgbColor() },
  { x: 74, y: 65, color: makeRgbColor() },
  { x: 74, y: 62, color: makeRgbColor() },
  { x: 73, y: 61, color: makeRgbColor() },
  { x: 72.5, y: 60, color: makeRgbColor() },
  { x: 72, y: 59, color: makeRgbColor() },
  { x: 71, y: 59, color: makeRgbColor() },
  { x: 70, y: 59, color: makeRgbColor() },
  { x: 69, y: 60, color: makeRgbColor() },
  { x: 68, y: 61, color: makeRgbColor() },
  { x: 67, y: 62, color: makeRgbColor() },
];

export const letterA: DatasetType[] = [
  // left line
  { x: 45, y: 45, color: "#ffffff" },
  { x: 46, y: 43, color: "#ffffff" },
  { x: 47, y: 41, color: "#ffffff" },
  { x: 48, y: 39, color: "#ffffff" },
  { x: 49, y: 37, color: "#ffffff" },
  { x: 50, y: 35, color: "#ffffff" },
  { x: 51, y: 33, color: "#ffffff" },
  { x: 52, y: 31, color: "#ffffff" },
  { x: 53, y: 29, color: "#ffffff" },
  { x: 54, y: 27, color: "#ffffff" },
  { x: 55, y: 25, color: "#ffffff" },
  { x: 56, y: 23, color: "#ffffff" },
  { x: 57, y: 21, color: "#ffffff" },
  { x: 58, y: 19, color: "#ffffff" },

  // peak
  { x: 59, y: 17, color: "#ffffff" },

  // right line
  { x: 60, y: 19, color: "#ffffff" },
  { x: 61, y: 21, color: "#ffffff" },
  { x: 62, y: 23, color: "#ffffff" },
  { x: 63, y: 25, color: "#ffffff" },
  { x: 64, y: 27, color: "#ffffff" },
  { x: 65, y: 29, color: "#ffffff" },
  { x: 66, y: 31, color: "#ffffff" },
  { x: 67, y: 33, color: "#ffffff" },
  { x: 68, y: 35, color: "#ffffff" },
  { x: 69, y: 37, color: "#ffffff" },
  { x: 70, y: 39, color: "#ffffff" },
  { x: 71, y: 41, color: "#ffffff" },
  { x: 72, y: 43, color: "#ffffff" },
  { x: 73, y: 45, color: "#ffffff" },

  // middle line
  { x: 51, y: 32, color: "#ffffff" },
  { x: 52, y: 32, color: "#ffffff" },
  { x: 53, y: 32, color: "#ffffff" },
  { x: 54, y: 32, color: "#ffffff" },
  { x: 55, y: 32, color: "#ffffff" },
  { x: 56, y: 32, color: "#ffffff" },
  { x: 57, y: 32, color: "#ffffff" },
  { x: 58, y: 32, color: "#ffffff" },
  { x: 59, y: 32, color: "#ffffff" },
  { x: 60, y: 32, color: "#ffffff" },
  { x: 61, y: 32, color: "#ffffff" },
  { x: 62, y: 32, color: "#ffffff" },
  { x: 63, y: 32, color: "#ffffff" },
  { x: 64, y: 32, color: "#ffffff" },
  { x: 65, y: 32, color: "#ffffff" },
  { x: 66, y: 32, color: "#ffffff" },
];

export const diagonalDataset: DatasetType[] = Array.from(
  { length: 50 },
  (_, index) => ({
    x: index,
    y: index,
    color: "#ffffff",
  })
);

export const originalDataset: DatasetType[] = Array.from(
  { length: 50 },
  () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: "#ffffff",
  })
);

export const rainbowDataset: DatasetType[] = originalDataset.map((arr) => ({
  x: arr.x,
  y: arr.y,
  color: makeRgbColor(),
}));

export type DatasetType = { x: number; y: number; color: string };
export type DatasetName =
  | "scatter"
  | "diagonal"
  | "heart"
  | "letterA"
  | "rainbow"
  | "big";

export enum AllowedPhotoType {
  carepod = "CarePods",
  lexical = "Lexical",
  blockchain = "Blockchain",
  timero = "Timero",
  cassandra = "Cassandra",
  facerec = "FaceRec",
  style = "StyleTransfer",
  suggestme = "SuggestMe",
  bert = "BERT",
  nothing = "",
}

export const workToTags: {
  [key in keyof typeof AllowedPhotoType]: string[];
} = {
  carepod: ["healthcare", "full stack"],
  lexical: ["frontend", "text editor"],
  blockchain: ["finance"],
  timero: ["web", "full stack"],
  cassandra: ["blog post", "ds"],
  facerec: ["ml", "research"],
  style: ["blog post", "ml"],
  bert: ["blog post", "ml"],
  suggestme: ["web", "full stack"],
  nothing: [""],
};

export const workToTech: {
  [key in keyof typeof AllowedPhotoType]: string[];
} = {
  carepod: ["ts", "go", "react", "aws"],
  lexical: ["ts", "react"],
  blockchain: [
    "react",
    "js",
    "solidity",
    "web3",
    "metamask (smart contracts)",
    "ethereum (abi)",
    "heroku",
  ],
  timero: [
    "js",
    "flask",
    "tailwind",
    "postgresql",
    "bootstrap",
    "rest api",
    "jquery",
    "sqlalchemy",
    "chart.js",
    "html5",
    "netlify",
    "jinja2",
  ],
  cassandra: ["databases", "docker", "shell", "blog"],
  facerec: ["python", "cv2", "vggface"],
  style: ["python", "pytorch", "cnn", "gan", "vgg19", "pandas"],
  bert: ["bert (sequence classification)", "pytorch", "pandas"],
  suggestme: [
    "flask",
    "jinja2",
    "sqlaclhemy",
    "docker",
    "ci/cd",
    "scraping",
    "css/html/js",
  ],
  nothing: [""],
};

export const descriptions: {
  [key in keyof typeof AllowedPhotoType]: string;
} = {
  carepod:
    "With the mission of providing healthcare for billions for free, in the last 2 years I have been working on full stack projects ranging from building entire backend services all the way to creating fascinating framer-motion animations on the frontend. Check out more about the CarePods and other cool things I’ve been working on below.",
  lexical:
    "I have always had a fascination with various text editors as I am a huge fan of taking notes and formatting them nicely (thanks to bullet journaling in high school) as well as teaching people new concepts through cool tutorials in blogs. That’s why creating demos for Meta’s most prominent text editor framework has been such a blast as I had a chance to not only improve my frontend skills by pushing the limits of frontend but also share my understanding with the world in the form of succinct tutorials explaining the usage of each individual component. Check out my sandboxes below.",
  blockchain:
    "My first software engineering internship where I got to build Kazakhstan’s first decentralized bank application. I learned so much fun stack like web3, Metamask, Solidity and Ethereum and was able to use JavaScript as a frontend engineer to build blockchain wallets with various flexible functionality. Check them out below.",
  timero:
    "As my Capstone project I chose to create a web app I always needed and never was patient enough to follow - the timer app. With a nice twist, I gamified it a little and built in a mix of todo list, stats, dashboards and incentives in the form of an ability to play mini-games inside the web app. Check it out here.",
  cassandra:
    "My first time working with distributed systems and a database like Cassandra has definitely been fun. As I was learning about how everything works and what steps to take to run the clusters on my personal machine, I figured there was no extensive blog that covered all parts of understanding, spinning up, running, working with and testing the database, which is whyI decided to take matters in my own hands and create a nice tutorial blog that will go over most nitty gritty details of introducing yourself to Cassandra. Check out my Notion post here.",
  facerec:
    "I have built a machine learning add-on that can recognize and highlight the faces of people, which helps tell them apart from each other in a video format in real time. I have always wanted to code something this sophisticated and create such a powerful tool that just needs couple images of the people. For example, I tried it on BTS and fed the model 15 pictures of each member and it had an 80% accuracy in the video for Black Swan. Check out the paper here.",
  style:
    "I am really into art so I wanted to try doing style transfer using GANs and CNNs to make some of my pictures seem like they have been drawn by famous artists. Check it out here.",
  bert: "I like watching movies but sometimes I don't like reading the reviews and deciding whether the reviewer liked the movie or not. For this task, I decided it was more fun to do sentiment classification by fine-tuning the existing BERT model with the Movie Reviews dataset on Kaggle. Check out how I did it below.",
  suggestme:
    "One of my first software engineering projects that focused on building a personalized Instagram dashboard that could help creators understand their own stats as well as the current trends within followers. Check it out here.  ",
  nothing: "",
};

export const webLinks: { [key in keyof typeof AllowedPhotoType]?: string } = {
  carepod: "https://goforward.com/carepod-announce",
  lexical: "https://codesandbox.io/u/akmarzhan1",
  blockchain: "https://uk.linkedin.com/company/inka-finance",
  cassandra:
    "https://akmarzhan.notion.site/Cassandra-who-or-a-short-introduction-to-Apache-Cassandra-using-Docker-798d343c41c84dddbb2e52873a04e1b0",
  bert: "https://drive.google.com/file/d/1X3jDNhsfgVxTpn7ZmOK1ifQO9Q4bScSR/view",
  style:
    "https://drive.google.com/file/d/1sk7uUkuHolFaWc6JiNk_HGfexIFiczBJ/view?usp=sharing",
  nothing: "",
};

export const githubLinks: { [key in keyof typeof AllowedPhotoType]?: string } =
  {
    lexical: "https://github.com/facebook/lexical",
    timero: "https://github.com/akmarzhan1/capstone-akma",
    facerec: "https://github.com/akmarzhan1/kpop-recognition-tool",
    suggestme: "https://github.com/akmarzhan1/content-suggestion",
    nothing: "",
  };

export const workToPath: { [key in keyof typeof AllowedPhotoType]: string } = {
  carepod: carepodPic,
  lexical: lexical,
  blockchain: blockchain,
  timero: timero,
  cassandra: cassandra,
  facerec: kpop,
  style: model,
  bert: bert,
  suggestme: suggest,
  nothing: "",
};

export const workToName: { [key in keyof typeof AllowedPhotoType]: string } = {
  carepod: "Future of Healthcare",
  lexical: "Meta's Ultimate text-editor",
  blockchain: "Decentralized Bank in Kazakhstan",
  timero: "Time Management tool",
  cassandra: "Cassandra Tutorial",
  facerec: "Face Recognition tools",
  style: "Style Transfer using GANs and CNNs",
  suggestme: "Instagram Analytics and Suggestions Tool",
  bert: "BERT Sentiment Analysis",
  nothing: "",
};
