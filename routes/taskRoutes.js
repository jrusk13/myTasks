const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const {
    listAllTasks,
    addTask,
    manageTask,
    updateTask,
    removeTask
} = require('../controllers/taskController');

// Get all tasks
router.get('/', listAllTasks);

// Creating a new task
router.get('/tasks/new', (req, res) => res.render('createTask'))
router.post('/tasks/new', addTask);

// Update task
router.get('/tasks/edit/:id', manageTask);
router.post('/tasks/edit/:id', updateTask);

// Delete post
router.get('/tasks/delete/:id', removeTask);

module.exports = router;