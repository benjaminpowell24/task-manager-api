import Task from '../models/Task.js'

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).json({ sucess: true, data: tasks })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const getTask = async (req, res) => {
  try {
    const taskId = req.params.id
    const task = await Task.findById(taskId)

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` })
    }

    return res.status(200).json({ success: true, data: task })
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

const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id
    const task = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
      runValidators: true,
    })

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` })
    }

    res.status(200).json({ success: true, data: task })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const deleteTask = async (req, res) => {
  try {
    const {id: taskId} = req.params

    const task = await Task.findOneAndDelete(taskId)

    if(!task){
      return res.status(404).json({msg: `No task with id: ${taskId}`})
    }

    return res.status(200).json({success: true, data: task})
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

export { getAllTasks, getTask, createTask, updateTask, deleteTask }
