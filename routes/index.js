var express = require('express');	
var router = express.Router(); 
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('yea, we are connected');
 });  
 
 /* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', {
       title: 'My To Do List',
  		header: 'Due Date: Please Enter as (00/00/0000)',
  		header2: 'Description: Maximum 20 letters',
  		header3: 'Title: Name of To Do Item (Max 10 letters)',
  		header4: 'Priority (10-100)'
    }
  );
});

 




module.exports = router;