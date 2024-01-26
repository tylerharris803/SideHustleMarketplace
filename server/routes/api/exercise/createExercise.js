import { prisma } from '../../../db/prisma.js'

export default async function (req, res) {
  const newExercise = await prisma.exercise.create({
    data: {
      name: 'bench press',
      category: 'strength',
      description: 'lift the bar'
    }
  })
  res.send(`${newExercise.name} was created in the db`)
}
