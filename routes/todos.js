'use strict';

var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

router.get('/', function(req, res, next) {
  Todo.find(function(err, todos) {
    res.status(err ? 400 : 200).send(err || todos);
  });
});

router.post('/', function(req, res) {
  Todo.create(req.body, function(err, todo) {
    res.status(err ? 400 : 200).send(err || todo);
  });
});

router.delete('/:todo_id', function(req, res) {
  Todo.findByIdAndRemove(req.params.todo_id, function(err, todo) {
    res.status(err ? 400 : 200).send(err || 'todo deleted')
  });
});

module.exports = router;