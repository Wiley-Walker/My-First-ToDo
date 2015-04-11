var express = require('express');
var router = express.Router(); 
var mongoose = require('mongoose');



var todoSchema = mongoose.Schema({
    due_date: Date,
    timestamp: Date,
    description: String,
    title: String,
    priority: Number,
    complete: Boolean
});

var Todo = mongoose.model("Todo", todoSchema );

router.get('/', function(req, res, next) {
  return Todo.find( function (err, tasks) {
    if(!err) {
      res.render('todo', {
        greeting: "TO DO LIST",
        tasks: tasks
      });
   //   console.log(tasks);
    } else {
      return console.error(err);
    }
  });
});
 


/* POST form. */
router.post('/', function(req, res) {
	console.log(req.body);
  new Todo({
    title: req.body.mytitle,
    due_date: req.body.dueDate,
    description: req.body.description,
    priority: req.body.priority
    // complete: false
  }).save(function (err, task) {
    if(err) {
      return console.error(err);
    }
  console.log(task);
  });

  res.redirect('todo');
});

module.exports = router;