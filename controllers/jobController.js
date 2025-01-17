const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');
const { 
    getJobs,
    getJobById,
    createJob,
    editJob,
    deleteJob
} = require('../models/jobModel');

// Get all tasks
const listAllJobs = (req, res) => {
    const jobs = getJobs();

    if (!res.status(200)) {
        throw new Error(`Could not get all jobs`);
    } else {
        res.render('jobs', { jobs });
    }
};

// Create a task
const addJob = (req, res) => {
    if (!req.body.name) {
        return res.redirect('/jobs');
    }
    
    const { 
        client, 
        name, 
        mailDate
    } = req.body;
    
    createJob({
        client, 
        name, 
        mailDate
    });

    res.redirect('/jobs');
};

// Manage job
const manageJob = (req, res) => {
    const id = req.params.id;
    const job = getJobById(id);
    res.render('editJob', { job });
};

// Update a job
const updateJob = (req, res) => {
    const id = req.params.id;
    const updatedJob = req.body;

    editJob(id, updatedJob);

    res.redirect('/jobs');
}

// Delete a job
const removeJob = (req, res) => {
    const id = req.params.id;
    
    deleteJob(id);

    res.redirect('/jobs');
}

module.exports = {
    listAllJobs,
    addJob,
    manageJob,
    updateJob,
    removeJob
};