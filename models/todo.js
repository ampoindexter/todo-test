'use strict';

var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  description: { type: String },
  dueDate: { type: Date },
  // complete: { type: Boolean, default: false }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;