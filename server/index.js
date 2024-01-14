import dotenv from 'dotenv';
import express, {response} from 'express';
import {prisma} from "./db/prisma.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
    res.json({ message: "I like Brandon's bum" });
});

app.post("/createExercise", async (req, res) => {
    const newExercise = await prisma.exercise.create({
        data: {
            name: "bench press",
            category: "strength",
            description: "lift the bar"
        }
    });
    res.send(`${newExercise.name} was created in the db`);
});

app.get("/getExerciseNames", async (req, res) => {
    const exercises = await prisma.exercise.findMany();
    const exerciseNames = exercises.map((exercise) => exercise.name);

    res.send(exerciseNames);
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});