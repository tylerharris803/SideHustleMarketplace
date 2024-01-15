import {prisma} from "../../../db/prisma.js";

export default async function (req,res) {
    const exercises = await prisma.exercise.findMany();
    const exerciseNames = exercises.map((exercise) => exercise.name);

    res.send(exerciseNames);
}