import getBum from './getBum.js'
import { Router } from 'express'

export const garbageRouter = Router()

garbageRouter.route('/getBum')
  .get(getBum)
