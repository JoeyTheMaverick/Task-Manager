const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');
const router = express.Router();


router.get('/', auth, async (req, res) => {
    const tasks = await Task.find({ userId: req.user.userId });
    res.json(tasks);
});

router.post('/', auth, async (req, res) => {
    const { title, description, status, priority, dueDate } = req.body;
    const task = new Task({ title, description, status, priority, dueDate, userId: req.user.userId });
    await task.save();
    res.status(201).json(task);
});

router.put('/:id', auth, async (req, res) => {
    const task = await Task.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.userId },
        req.body,
        { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found '});
    res.json(task);
});

router.delete('/:id', auth, async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ messgae: 'Task deleted' });
});

module.exports = router;