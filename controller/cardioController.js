var express = require('express');
var cors = require('cors');

var db = require('../db');
var bodyParser = require('body-parser');


var router = express.Router();
router.use(cors());
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.get('/cardio', function(request,response) {
    db.query('SELECT * FROM cardio',(error,result)=>{ 
      if(error) throw error;
      response.render('cardio',{results:result});
    });
  });
  
  router.get('/cardioUpd/:id', function(request,response) {
    db.query("SELECT * FROM cardio WHERE cardioId='" + request.params.id + "'",(error,result)=>{
      if(error) throw error;
      response.render('cardioUpd',{results:result});
    });
  });
  
  //change fitnessid
  router.post('/cardio', function(request,response) {
    db.query('INSERT INTO cardio (`fitnessId`,`instructor`,`room_number`,`capacity`,`start_time`,`end_time`) VALUES (?,?,?,?,?,?)',[3,
      request.body.instructor,request.body.room_number,request.body.capacity,request.body.start_time,request.body.end_time],(error,result)=>{
      if(error) throw error;
        db.query('SELECT * FROM cardio',(error,result) => {
          if(error) throw error
          response.render('cardio',{results:result});
        });
      });
  });
  
  router.delete('/cardio/:id',async function(request,response) {
    await db.query("DELETE FROM cardio WHERE cardioId='"+ request.params.id + "'", function(error,result) {
      if(error) throw error;
      db.query('SELECT * FROM cardio',(error,result) => {
        if(error) throw error
        response.render('cardio',{results:result});
      });
    });
  });
  
  router.put('/cardio/:id', function(request,response) {
    db.query("UPDATE cardio SET instructor='" + request.body.instructor + "',room_number='" + request.body.room_number + "',capacity='"+ request.body.capacity + "',start_time='" + request.body.start_time + "',end_time='" + request.body.end_time +"' WHERE cardioId='"+ request.params.id + "'", function(error,result) {
      if(error) throw error;
      db.query('SELECT * FROM cardio',(error,result) => {
        if(error) throw error
        response.render('cardio',{results:result});
      });
    });
  });
  
  module.exports = router;