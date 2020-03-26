var express = require('express');
var cors = require('cors');

var db = require('../db');
var bodyParser = require('body-parser');


var router = express.Router();
router.use(cors());
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.get('/yoga', function(request,response) {
    db.query('SELECT * FROM yoga',(error,result)=>{ 
      if(error) throw error;
      response.render('yoga',{results:result});
    });
  });
  
  router.get('/yogaUpd/:id', function(request,response) {
    db.query("SELECT * FROM yoga WHERE yogaId='" + request.params.id + "'",(error,result)=>{
      if(error) throw error;
      response.render('yogaUpd',{results:result});
    });
  });
  
  //change fitnessid
  router.post('/yoga', function(request,response) {
    db.query('INSERT INTO yoga (`fitnessId`,`instructor`,`room_number`,`capacity`,`start_time`,`end_time`) VALUES (?,?,?,?,?,?)',[1,
      request.body.instructor,request.body.room_number,request.body.capacity,request.body.start_time,request.body.end_time],(error,result)=>{
      if(error) throw error;
        db.query('SELECT * FROM yoga',(error,result) => {
          if(error) throw error
          response.render('yoga',{results:result});
        });
      });
  });
  
  router.delete('/yoga/:id',async function(request,response) {
    await db.query("DELETE FROM yoga WHERE yogaId='"+ request.params.id + "'", function(error,result) {
      if(error) throw error;
      db.query('SELECT * FROM yoga',(error,result) => {
        if(error) throw error
        response.render('yoga',{results:result});
      });
    });
  });
  
  router.put('/yoga/:id', function(request,response) {
    db.query("UPDATE yoga SET instructor='" + request.body.instructor + "',room_number='" + request.body.room_number + "',capacity='"+ request.body.capacity + "',start_time='" + request.body.start_time + "',end_time='" + request.body.end_time +"' WHERE yogaId='"+ request.params.id + "'", function(error,result) {
      if(error) throw error;
      db.query('SELECT * FROM yoga',(error,result) => {
        if(error) throw error
        response.render('yoga',{results:result});
      });
    });
  });
  
  module.exports = router;
  