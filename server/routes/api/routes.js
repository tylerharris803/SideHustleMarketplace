import { Router } from "express";
import { exerciseRouter } from "./exercise/routes.js";
import { garbageRouter } from "./garbage/routes.js";

export const apiRouter = Router();

apiRouter.use("/exercise", exerciseRouter);
apiRouter.use("/garbage", garbageRouter);