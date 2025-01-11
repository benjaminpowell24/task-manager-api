const express = require('express')
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks')

const Router = express.Router()

Router.route('/').get(getAllTasks).post(createTask)

Router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = Router
