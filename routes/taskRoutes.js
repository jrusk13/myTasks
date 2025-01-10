const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const {
    listAllTasks,
    addTask
} = require('../controllers/taskController');

// Get all posts
router.get('/', listAllTasks);

// Creating a new post
router.get('/tasks/new', (req, res) => res.render('createTask'))
router.post('/tasks/new', addTask);

// Update post
// router.put('/:id', updatePost);

// Delete post
// router.delete('/:id', deletePost);

module.exports = router;