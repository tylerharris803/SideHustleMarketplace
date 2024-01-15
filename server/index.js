import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import {prisma} from "./db/prisma.js";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../client/build')));

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

// This serves the React app in production
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});