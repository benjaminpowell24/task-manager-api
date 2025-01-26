import express from 'express'

import 'dotenv/config'
import tasks from './routes/tasks.js'
import connectDB from './db/connection.js'
import notFound from './middleware/notFound.js'
import errorHandler from './middleware/errorHandler.js'

const app = express()

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 4000

const connectionStr = process.env.MONGO_URI

const main = async () => {
  try {
    await connectDB(connectionStr)
    app.listen(port, () =>
      console.log(`Connected to DB. Server listening on ${port}`)
    )
  } catch (err) {
    return console.log(err)
  }
}

main()
