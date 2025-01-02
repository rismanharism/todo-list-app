const { Todo } = require('../models');

// Get all tasks
const getTasks = async (req, res) => {
    const tasks = await Todo.findAll();
    res.render('index', { tasks });
};

// Add a new task
const addTask = async (req, res) => {
    const { title, description } = req.body;
    await Todo.create({ title, description });
    res.redirect('/');
};

// Edit a task
const editTask = async (req, res) => {
    const { id } = req.params;
    const task = await Todo.findByPk(id);
    res.render('editTask', { task });
};

// Update a task
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    await Todo.update({ title, description, status: status === 'on' }, { where: { id } });
    res.redirect('/');
};

// Delete a task
const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Todo.destroy({ where: { id } });
    res.redirect('/');
};

const toggleTaskStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    await Todo.update({ status: status === 'on' }, { where: { id } });
    res.redirect('/');
};

module.exports = { getTasks, addTask, editTask, updateTask, deleteTask, toggleTaskStatus };
