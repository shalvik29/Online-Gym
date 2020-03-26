var express = require('express');
var cors = require('cors');

var db = require('../db');
var bodyParser = require('body-parser');


var router = express.Router();
router.use(cors());
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.get('/strength', function(request,response) {
    db.query('SELECT * FROM strength',(error,result)=>{ 
      if(error) throw error;
      response.render('strength',{results:result});
    });
  });
  
  router.get('/strengthUpd/:id', function(request,response) {
    db.query("SELECT * FROM strength WHERE strengthId='" + request.params.id + "'",(error,result)=>{
      if(error) throw error;
      response.render('strengthUpd',{results:result});
    });
  });
  
  //change fitnessid
  router.post('/strength', function(request,response) {
    db.query('INSERT INTO strength (`fitnessId`,`instructor`,`room_number`,`capacity`,`start_time`,`end_time`) VALUES (?,?,?,?,?,?)',[4,
      request.body.instructor,request.body.room_number,request.body.capacity,request.body.start_time,request.body.end_time],(error,result)=>{
      if(error) throw error;
        db.query('SELECT * FROM strength',(error,result) => {
          if(error) throw error
          response.render('strength',{results:result});
        });
      });
  });
  
  router.delete('/strength/:id',async function(request,response) {
    await db.query("DELETE FROM strength WHERE strengthId='"+ request.params.id + "'", function(error,result) {
      if(error) throw error;
      db.query('SELECT * FROM strength',(error,result) => {
        if(error) throw error
        response.render('strength',{results:result});
      });
    });
  });
  
  router.patch('/strength/:id', function(request,response) {
    db.query("UPDATE strength SET instructor='" + request.body.instructor + "',room_number='" + request.body.room_number + "',capacity='"+ request.body.capacity + "',start_time='" + request.body.start_time + "',end_time='" + request.body.end_time +"' WHERE strengthId='"+ request.params.id + "'", function(error,result) {
      if(error) throw error;
      db.query('SELECT * FROM strength',(error,result) => {
        if(error) throw error
        response.render('strength',{results:result});
      });
    });
  });
  
  module.exports = router;