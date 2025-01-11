const express = require('express')
require('dotenv').config()

const connectDB = require('./db/connection')

const app = express()

const connectionStr = process.env.MONGO_URI

const main = async () => {
  try {
    await connectDB(connectionStr)
    app.listen(4000, () =>
      console.log(`Connected to DB. Server listening on 4000`)
    )
  } catch (err) {
    return console.log(err)
  }
}

main()
