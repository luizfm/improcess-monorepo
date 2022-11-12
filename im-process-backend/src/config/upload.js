import crypto from "crypto";
import multer from "multer";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tmpFolder = resolve(__dirname, "..", "..", "tmp");

const uploadConfig = {
  tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString("hex");
      const filename = `${fileHash}=${file.originalname}`;

      return callback(null, filename);
    },
  }),
};

export default uploadConfig;
