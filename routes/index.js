'use strict';

var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

router.get('/', function(req, res) {
  Todo.find(function(err, todos) {
    if(err) return res.status(400).send(err);
    res.render('index', {title: 'Todo Test!'}).send(todos);
  });
});

module.exports = router;