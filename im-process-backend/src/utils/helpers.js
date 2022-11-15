import { Image } from "image-js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image.load(path.join(__dirname, "./ss.png")).then((image) => {
//   console.log(image.getHistogram({ maxSlots: 256, channel: 1 }));
// });

export const getImageHistogram = async (image) => {
  const imageLoad = await Image.load(image);
  return imageLoad.getHistogram({ maxSlots: 256, channel: 1 });
};

const whiteList = ["http://localhost:3000", "http://192.168.0.31:3000"];

export const handleWhiteList = (origin, callback) => {
  if (whiteList.indexOf(origin) !== -1) {
    callback(null, true);
  } else {
    console.log(origin);
    callback(new Error("Not allowed by CORS"));
  }
};
