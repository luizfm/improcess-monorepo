import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload.js";
import GetImageHistogramController from "../../../../modules/image/useCases/getImageHistogram/GetImageHistogramController.js";

const upload = multer(uploadConfig);

const getImageHistogramController = new GetImageHistogramController();
const imageRouter = Router();

imageRouter.post(
  "/",
  upload.array("files"),
  getImageHistogramController.handle
);

export default imageRouter;
