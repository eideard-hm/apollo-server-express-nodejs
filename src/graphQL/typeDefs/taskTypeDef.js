import { gql } from 'apollo-server-express'

const taskTypeDef = gql`
  type Task {
    id: ID!
    title: String!
    description: String!
    createdAt: String!
    updatedAt: String!
  }

  input TaskInput {
    title: String
    description: String
  }

  type Mutation {
    createTask(task: TaskInput!): Task
    deleteTask(id: ID!): String
    updateTask(id: ID!, task: TaskInput): Task
  }

  type Query {
    getAllTasks: [Task]
    getTask(id: ID!): Task
  }
`

export default taskTypeDef
