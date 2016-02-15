'use strict';

var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo Test'});
});

router.get('/todos', function(req, res, next) {
  Todo.find(function(err, todos) {
    res.status(err ? 400 : 200).send(err || todos);
  });
});

router.post('/todos', function(req, res) {
  Todo.create(req.body, function(err, todo) {
    todo.description = req.body.description;
    todo.dueDate = req.body.dueDate;
    todo.complete = false;
    $scope.
    res.status(err ? 400 : 200).send(err || todo);
  });
});

router.delete('/todos/:todo_id', function(req, res) {
  Todo.findByIdAndRemove(req.params.todo_id, function(err, todo) {
    res.status(err ? 400 : 200).send(err || 'todo deleted')
  });
});

module.exports = router;