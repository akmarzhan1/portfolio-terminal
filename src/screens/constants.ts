import carepodPic from "../assets/carepod.jpg";
import kpop from "../assets/kpop.png";
import model from "../assets/model.png";
import lexical from "../assets/lexical.jpeg";
import suggest from "../assets/suggest.png";
import timero from "../assets/timero.png";
import cassandra from "../assets/cassandra.jpg";
import forward from "../assets/forward.jpg";

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
  nothing = "",
}

export const workToTags: {
  [key in keyof typeof AllowedPhotoType]: [string, string] | [string];
} = {
  carepod: ["healthcare", "full stack"],
  lexical: ["frontend", "text editor"],
  blockchain: ["finance"],
  timero: ["web", "full stack"],
  cassandra: ["blog post", "distributed system"],
  facerec: ["ml", "research"],
  style: ["blog post", "ml"],
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

const some =
  "Bls vskldjfksdjfklsjzdfjsldkjfklsjdflksd sdkfnsdlkfjlksdf dskfjnlsdknf sakdfjslkd jflksj nskjdnkjasdjknkjdbxfjs sbjbskj bls vskldjfksdjfklsjzdfjsldkjfklsjdflksd sdkfnsdlkfjlksdf dskfjnlsdknf sakdfjslkd jflksj nskjdnkjasdjknkjdbxfjs sbjbskj";

export const descriptions: {
  [key in keyof typeof AllowedPhotoType]: string;
} = {
  carepod: some,
  lexical: some,
  blockchain: some,
  timero: some,
  cassandra: some,
  facerec: some,
  style: some,
  suggestme: some,
  nothing: some,
};

export const workToPath: { [key in keyof typeof AllowedPhotoType]: string } = {
  carepod: carepodPic,
  lexical: lexical,
  blockchain: forward,
  timero: timero,
  cassandra: cassandra,
  facerec: kpop,
  style: model,
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
  nothing: "",
};
