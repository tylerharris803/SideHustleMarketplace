import {prisma} from "../../../db/prisma.js";

export default async function (req, res) {
    const newExercise = await prisma.exercise.create({
        data: {
            id: 4,
            name: "bench press",
            category: 1,
            description: "lift the bar",
            media: "blahblahblah"
        }
    });
    res.send(`${newExercise.name} was created in the db`);
}