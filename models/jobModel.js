const { create } = require('domain');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const jobFile = path.join(__dirname, '..', 'data', 'jobs.json');

// Get the task file
const getJobs = () => JSON.parse(fs.readFileSync(jobFile, 'utf-8'));
const getJobIndex = (id) => getJobs().findIndex(job => job.id === id);

// Get job by id
const getJobById = (id) => {
    const jobs = getJobs();
    return jobs.find(job => job.id === id);
};

// Create new job
const createJob = (job) => {
    const jobs = getJobs();
    job.id = uuidv4();
    job.client = job.client;
    job.name = job.name;
    job.mailDate = job.mailDate;
    job.createdAt = new Date().toDateString();
    job.updatedAt = new Date().toDateString();

    jobs.push(job);
    fs.writeFileSync(jobFile, JSON.stringify(jobs, null, 2));
    return job;
};

// Edit a job
const editJob = (id, updatedJob) => {
    const jobs = getJobs();
    const index = getJobIndex(id);

    if (index === -1) {
        throw new Error(`Job with ID ${id} not found.`);
    };

    jobs[index] = {
        ...jobs[index],
        ...updatedJob,
        updatedAt: new Date().toDateString()
    };

    fs.writeFileSync(jobFile, JSON.stringify(jobs, null, 2));
    return jobs[index];
};

// Delete a job
const deleteJob = (id) => {
    const jobs = getJobs();
    const index = getJobIndex(id);

    if (index === -1) {
        throw new Error(`Job with ID ${id} not found.`);
    };

    jobs.splice(index, 1);
    fs.writeFileSync(jobFile, JSON.stringify(jobs, null, 2));
};

module.exports = {
    getJobs,
    getJobById,
    createJob,
    editJob,
    deleteJob
}