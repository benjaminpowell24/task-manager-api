import express from 'express'

import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks.js'

const Router = express.Router()

Router.route('/').get(getAllTasks).post(createTask)

Router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


export default Router
