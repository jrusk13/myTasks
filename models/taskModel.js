const { create } = require('domain');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const taskFile = path.join(__dirname, '..', 'data', 'tasks.json');

// Get the task file
const getTasks = () => JSON.parse(fs.readFileSync(taskFile, 'utf-8'));

// Create a new task
const createTask = (task) => {
    const tasks = getTasks();
    task.id = uuidv4();
    task.client = task.client || null;
    task.jobName = task.jobName;
    task.jobNumber = task.jobNumber || null;
    task.jobPanel = task.jobPanel || null;
    task.jobTask = task.jobTask;
    task.notes = task.notes || null;
    task.completed = task.completed;
    task.dueDate = task.dueDate || null;
    task.createdAt = new Date().toISOString();
    task.updatedAt = new Date().toISOString();

    tasks.push(task);
    fs.writeFileSync(taskFile, JSON.stringify(tasks, null, 2));
    return task;
};

module.exports = { getTasks, createTask };