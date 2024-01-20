import { apiRouter } from './api/routes.js'

export function routeHandler (app) {
  app.use('/api', apiRouter)
}
