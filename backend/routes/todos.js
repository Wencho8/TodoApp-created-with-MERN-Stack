const express = require('express');

const todosController = require('../controllers/todos');

const router = express.Router();

// GET /todos/getTodos
router.get('/getTodos', todosController.getTodos);

// POST /todos/addTodo
router.post('/addTodo', todosController.addTodo);

// Delete /todos/deleteTodo
router.delete('/deleteTodo', todosController.deleteTodo);     

module.exports = router;