import { prisma } from '../../../db/prisma.js'

export default async function (req, res) {
    try {
        const exercises = await prisma.exercise.findMany();
        const exerciseNames = exercises.map(exercise => exercise.name);
        res.send(exerciseNames);
    } catch (error) {
        console.error('Error fetching exercises:', error);
        res.status(500).send('Internal Server Error');
    }
}

