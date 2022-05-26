import { GraphQLError } from 'graphql'

import { Task } from '../models'

export const getAllTasks = async () => await Task.find({})

export const getTask = async id => await Task.findById(id)

export const createTask = async task => await Task.create(task)

export const deleteTask = async id => {
  const deleteTask = await Task.findByIdAndDelete(id, {
    new: true,
    runValidators: true
  })

  if (!deleteTask) new GraphQLError(`Task with id ${id} not found`)
  return `Task ${id} has been successfully deleted`
}

export const updateTask = async (id, task) =>
  await Task.findByIdAndUpdate(id, task, {
    new: true,
    runValidators: true,
    timestamps: true
  })
