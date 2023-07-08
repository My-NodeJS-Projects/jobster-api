const express = require('express')

const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  getStats,
} = require('../controllers/jobs')

const testUserMiddleware = require('../middleware/testUser')

router.route('/').post(testUserMiddleware, createJob).get(getAllJobs)
router.route('/stats').get(getStats)
router
  .route('/:id')
  .get(getJob)
  .delete(testUserMiddleware, deleteJob)
  .patch(testUserMiddleware, updateJob)

module.exports = router
