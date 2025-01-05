const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');
const { getTasks, createTask } = require('../models/taskModel');

// Get all tasks
const listAllTasks = (req, res) => {
    const tasks = getTasks();
    
    if (!res.status(200)) {
        throw new Error(`Could not get all posts`);
    } else {
        res.render('tasks', { tasks });
    }
};

// Get single post
// const getSinglePost = (req, res) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find(post => post.id === id)
    
//     if (!post) {
//         return res.status(404).send( {error: `Could not find post with id of ${id}`});
//     }

//     res.status(200).send(post);
// };

// Create a task
const addTask = (req, res) => {
    const { client, jobName, jobNumber, jobPanel, jobTask, notes, completed, dueDate } = req.body;
    createTask({
        client,
        jobName,
        jobNumber,
        jobPanel, 
        jobTask,
        notes,
        completed,
        dueDate
    });

    res.redirect('/')
};

// Render add task page
const renderAddTask = (req, res) => {
    res.render('createTask');
};

// Update a post
// const updatePost = (req, res) => {
//     const id = parseInt(req.params.id);
//     const title = req.body.title;
//     const post = posts.find(post => post.id === id);

//     post.title = title;

//     res.send(posts);
// };

// Delete a post
// const deletePost = (req, res) => {
//     const id = parseInt(req.params.id);
//     posts = posts.filter(post => post.id !== id);

//     res.send(posts);
// };

module.exports = {
    listAllTasks,
    addTask,
    renderAddTask
};