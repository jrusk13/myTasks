const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const {
    listAllTasks,
    addTask,
    renderAddTask,
} = require('../controllers/taskController');

// Get all posts
router.get('/', listAllTasks);

// Creating a new post
router.get('/createTask', renderAddTask)
router.post('/tasks', addTask);

// Update post
// router.put('/:id', updatePost);

// Delete post
// router.delete('/:id', deletePost);

module.exports = router;