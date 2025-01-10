const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');
const { 
    getTasks,
    getTaskById, 
    createTask,
    editTask,
    deleteTask
} = require('../models/taskModel');

// Get all tasks
const listAllTasks = (req, res) => {
    const tasks = getTasks();

    if (!res.status(200)) {
        throw new Error(`Could not get all posts`);
    } else {
        res.render('tasks', { tasks });
    }
};

// Create a task
const addTask = (req, res) => {
    if (!req.body.jobTask) {
        return res.redirect('/');
    }
    
    const { 
        client, 
        jobName, 
        jobNumber, 
        jobPanel, 
        jobTask, 
        notes, 
        completed, 
        dueDate 
    } = req.body;
    
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

    res.redirect('/');
};

module.exports = {
    listAllTasks,
    addTask
};