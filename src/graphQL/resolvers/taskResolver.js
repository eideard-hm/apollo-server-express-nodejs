import {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask
} from '../../controllers/taskController'

const taskResolver = {
  Query: {
    getAllTasks,
    getTask: async (_, { id }) => await getTask(id)
  },

  Mutation: {
    createTask: async (_, { task }) => await createTask(task),
    updateTask: async (_, { id, task }) => await updateTask(id, task),
    deleteTask: async (_, { id }) => await deleteTask(id)
  }
}

export default taskResolver
