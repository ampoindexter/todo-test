'use strict';

var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo Test'});
});

router.get('/todos', function(req, res, next) {
  Todo.find(function(err, todos) {
    if(err) res.send(err);
  });
});

router.post('/todos', function(req, res) {
  Todo.create({
    description: req.body.description,
    dueDate: req.body.dueDate,
    complete: false
  }, function(err, todo) {
    if(err) return res.status(400).send(err);
    Todo.find(function(err, todos) {
      res.status(err ? 400 : 200).send(err || todos);
    });
  });
});

module.exports = router;