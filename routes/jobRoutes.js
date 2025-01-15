const express = require('express');
const jobRouter = express.Router();
const { v4: uuidv4 } = require('uuid');
const {
    listAllJobs,
    addJob,
    manageJob,
    updateJob,
    removeJob
} = require('../controllers/jobController');

// Get all Jobs
jobRouter.get('/jobs', listAllJobs);

// Creating a new Job
jobRouter.get('/jobs/new', (req, res) => res.render('createJob'))
jobRouter.post('/jobs/new', addJob);

// Update Job
jobRouter.get('/jobs/edit/:id', manageJob);
jobRouter.post('/jobs/edit/:id', updateJob);

// Delete post
jobRouter.get('/jobs/delete/:id', removeJob);

module.exports = jobRouter;