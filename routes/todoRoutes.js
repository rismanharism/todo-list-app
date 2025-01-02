const express = require('express');
const router = express.Router();
const { getTasks, addTask, editTask, updateTask, deleteTask } = require('../controllers/todoController');

// Render halaman tambah tugas
router.get('/add', (req, res) => {
    res.render('addTask');
});

router.post('/toggle/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    // Update status di database
    const { Todo } = require('../models');
    await Todo.update({ status: status === 'on' }, { where: { id } });

    res.redirect('/');
});

const { toggleTaskStatus } = require('../controllers/todoController');
router.post('/toggle/:id', toggleTaskStatus);


router.get('/', getTasks);
router.post('/add', addTask);
router.get('/edit/:id', editTask);
router.post('/update/:id', updateTask);
router.get('/delete/:id', deleteTask);

module.exports = router;
