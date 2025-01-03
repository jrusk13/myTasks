const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const {
    getAllPosts,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/taskController');

// Get all posts
router.get('/', getAllPosts);

// Get single post
router.get('/:id', getSinglePost);

// Create new post
router.post('/', createPost);

// Update post
router.put('/:id', updatePost);

// Delete post
router.delete('/:id', deletePost);

module.exports = router;