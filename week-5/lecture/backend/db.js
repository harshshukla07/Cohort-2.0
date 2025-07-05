const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshshukla5810:Harsh2245@cluster0.slucarg.mongodb.net/todos')

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description:{ type: String, default: '' },
  completed: { type: Boolean, default: false }
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {todo};
