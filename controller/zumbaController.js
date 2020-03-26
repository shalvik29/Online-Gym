var express = require('express');
var cors = require('cors');

var db = require('../db');
var bodyParser = require('body-parser');


var router = express.Router();
router.use(cors());
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.get('/zumba', function(request,response) {
    db.query('SELECT * FROM zumba',(error,result)=>{ 
      if(error) throw error;
      response.render('zumba',{results:result});
    });
  });
  
  router.get('/zumbaUpd/:id', function(request,response) {
    db.query("SELECT * FROM zumba WHERE zumbaId='" + request.params.id + "'",(error,result)=>{
      if(error) throw error;
      response.render('zumbaUpd',{results:result});
    });
  });
  
  //change fitnessid
  router.post('/zumba', function(request,response) {
    db.query('INSERT INTO zumba (`fitnessId`,`instructor`,`room_number`,`capacity`,`start_time`,`end_time`) VALUES (?,?,?,?,?,?)',[2,
      request.body.instructor,request.body.room_number,request.body.capacity,request.body.start_time,request.body.end_time],(error,result)=>{
      if(error) throw error;
        db.query('SELECT * FROM zumba',(error,result) => {
          if(error) throw error
          response.render('zumba',{results:result});
        });
      });
  });
  
  router.delete('/zumba/:id',async function(request,response) {
    await db.query("DELETE FROM zumba WHERE zumbaId='"+ request.params.id + "'", function(error,result) {
      if(error) throw error;
      db.query('SELECT * FROM zumba',(error,result) => {
        if(error) throw error
        response.render('zumba',{results:result});
      });
    });
  });
  
  router.patch('/zumba/:id', function(request,response) {
    db.query("UPDATE zumba SET instructor='" + request.body.instructor + "',room_number='" + request.body.room_number + "',capacity='"+ request.body.capacity + "',start_time='" + request.body.start_time + "',end_time='" + request.body.end_time +"' WHERE zumbaId='"+ request.params.id + "'", function(error,result) {
      if(error) throw error;
      db.query('SELECT * FROM zumba',(error,result) => {
        if(error) throw error
        response.render('zumba',{results:result});
      });
    });
  });

  module.exports = router;