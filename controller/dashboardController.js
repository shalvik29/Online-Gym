var express = require('express');
var cors = require('cors');

var db = require('../db');
var bodyParser = require('body-parser');


var router = express.Router();
router.use(cors());
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.get('/contact', function(request,response) {
    db.query('SELECT * FROM contact',(error,result)=>{
      if(error) throw error;
      response.render('contact',{results:result});
    });
});

router.get('/about', function(request,response) {
  db.query('SELECT * FROM about',(error,result)=>{
    if(error) throw error;
    response.render('about',{results:result});
  });
});

router.get('/fitness', function(request,response) {
  db.query('SELECT * FROM fitness',(error,result)=>{
    if(error) throw error;
    response.render('fitness',{results:result});
  });
});

module.exports = router;