import { Router } from "express";
import imageRouter from "./image.route.js";

const routes = Router();

routes.use("/image", imageRouter);

export default routes;
