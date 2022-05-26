import { gql } from 'apollo-server-express'

import { taskResolver } from './resolvers'
import { taskTypeDef } from './typeDefs'

const rootTypeDefs = gql`
  type Query {
    _: String
  }
`

const resolvers = [taskResolver]

const typeDefs = [rootTypeDefs, taskTypeDef]

export { typeDefs, resolvers }
