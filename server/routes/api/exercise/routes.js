import createExercise from "./createExercise.js";
import getExerciseNames from "./getExerciseNames.js";
import { Router } from "express";

export const exerciseRouter = Router();

exerciseRouter.route("/createExercise")
    .post(createExercise);

exerciseRouter.route("/getExerciseNames")
    .get(getExerciseNames);