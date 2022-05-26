import { ApolloServer } from 'apollo-server-express'

import { resolvers, typeDefs } from './graphQL/schema'

export const startApolloServer = async () => {
  // create new ApolloServer object
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  })
  // start graphql configuration
  await apolloServer.start()
  return apolloServer
}
