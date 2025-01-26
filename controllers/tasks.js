import Task from '../models/Task.js'
import asyncWrapper from '../middleware/asyncWrapper.js'

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find()
  res.status(200).json({ success: true, data: tasks })
})

const getTask = asyncWrapper(async (req, res) => {
  const taskId = req.params.id
  const task = await Task.findById(taskId)

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}` })
  }

  return res.status(200).json({ success: true, data: task })
})

const createTask = asyncWrapper(async (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ success: false, msg: `No body found in request` })
  }
  const task = await Task.create(req.body)

  res.status(201).json({ success: true, data: task })
})

const updateTask = asyncWrapper(async (req, res) => {
  const taskId = req.params.id
  const task = await Task.findByIdAndUpdate(taskId, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}` })
  }

  res.status(200).json({ success: true, data: task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params

  const task = await Task.findOneAndDelete(taskId)

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}` })
  }

  return res.status(200).json({ success: true, data: task })
})

export { getAllTasks, getTask, createTask, updateTask, deleteTask }
