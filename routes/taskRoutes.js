const express = require('express');
const taskRouter = express.Router();
const { v4: uuidv4 } = require('uuid');
const {
    listAllTasks,
    addTask,
    manageTask,
    updateTask,
    removeTask,
} = require('../controllers/taskController');
const {
    getJobs
} = require('../models/jobModel');

const jobs = getJobs();

// Get all tasks
taskRouter.get('/', listAllTasks);

// Creating a new task
taskRouter.get('/tasks/new', (req, res) => res.render('createTask', { jobs }))
taskRouter.post('/tasks/new', addTask);

// Update task
taskRouter.get('/tasks/edit/:id', manageTask);
taskRouter.post('/tasks/edit/:id', updateTask);

// Delete post
taskRouter.get('/tasks/delete/:id', removeTask);

module.exports = taskRouter;