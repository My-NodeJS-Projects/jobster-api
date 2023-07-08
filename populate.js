require('dotenv').config()
const connectDB = require('./db/connect')
const Job = require('./models/Job')
const mockData = require('./mock-data.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log('DB connected')
    await Job.create(mockData)
    console.log('Data dumped')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

start()
