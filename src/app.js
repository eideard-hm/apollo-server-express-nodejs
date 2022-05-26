import express from 'express'

import { startApolloServer } from './apolloServer'

const app = express()

// start apollo server configurations
const apolloServer = async () => {
  // start apollo server
  const apolloServer = await startApolloServer()
  // Join with express server
  apolloServer.applyMiddleware({ app })
}

apolloServer()

export default app
