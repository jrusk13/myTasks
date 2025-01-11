const { create } = require('domain');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const taskFile = path.join(__dirname, '..', 'data', 'tasks.json');

// Get the task file
const getTasks = () => JSON.parse(fs.readFileSync(taskFile, 'utf-8'));
const getTaskIndex = (id) => getTasks().findIndex(task => task.id === id);

// Get task by id
const getTaskById = (id) => {
    const tasks = getTasks();
    return tasks.find(task => task.id === id);
};

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
    task.createdAt = new Date().toDateString();
    task.updatedAt = new Date().toDateString();

    tasks.push(task);
    fs.writeFileSync(taskFile, JSON.stringify(tasks, null, 2));
    return task;
};

// Edit a task
const editTask = (id, updatedTask) => {
    const tasks = getTasks();
    const index = getTaskIndex(id);

    if (index === -1) {
        throw new Error(`Task with ID ${id} not found.`);
    };

    tasks[index] = {
        ...tasks[index],
        ...updatedTask,
        updatedAt: new Date().toDateString()
    };

    fs.writeFileSync(taskFile, JSON.stringify(tasks, null, 2));
    return tasks[index];
};

// Delete a task
const deleteTask = (id) => {
    const tasks = getTasks();
    const index = getTaskIndex(id);

    if (index === -1) {
        throw new Error(`Task with ID ${id} not found.`);
    };

    tasks.splice(index, 1);
    fs.writeFileSync(taskFile, JSON.stringify(tasks, null, 2));
};

module.exports = { 
    getTasks,
    getTaskById, 
    createTask,
    editTask,
    deleteTask 
};