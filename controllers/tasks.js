const Task = require('../models/Task')

const getAllTasks = (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const getTask = (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const createTask = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ success: false, msg: `No body found in request` })
    }
    const task = await Task.create(req.body)

    res.status(201).json({ success: true, data: task })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const updateTask = (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const deleteTask = (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask }
