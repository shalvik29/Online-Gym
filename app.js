var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var app = express();
var gymRouter = require('./controller/gymDetailsController')

app.use(express.static('stylesheets'));
app.use(express.static('images'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(req,res) {
    res.render('index');
})
db.query('CREATE TABLE IF NOT EXISTS about (`aboutId` int(10) NOT NULL primary key AUTO_INCREMENT,`details` varchar(50) NOT NULL,`address` varchar(100) NOT NULL,`phone_number` int(7) NOT NULL)');
db.query('CREATE TABLE IF NOT EXISTS fitness (`fitnessId` int(10) NOT NULL primary key AUTO_INCREMENT,`details` longtext NOT NULL,`image` longblob NOT NULL)');
db.query('CREATE TABLE IF NOT EXISTS yoga (`yogaId` int(10) NOT NULL primary key AUTO_INCREMENT,`fitnessId` int(10) NOT null,`instructor` varchar(100) NOT NULL,`room_number` int(7) NOT NULL,`capacity` int(7) NOT NULL,`start_time` datetime NOT NULL,`end_time` datetime NOT NULL)');
db.query('CREATE TABLE IF NOT EXISTS zumba (`zumbaId` int(10) NOT NULL primary key AUTO_INCREMENT,`fitnessId` int(10) NOT null,`instructor` varchar(100) NOT NULL,`room_number` int(7) NOT NULL,`capacity` int(7) NOT NULL,`start_time` datetime NOT NULL,`end_time` datetime NOT NULL)');
db.query('CREATE TABLE IF NOT EXISTS cardio (`cardioId` int(10) NOT NULL primary key AUTO_INCREMENT,`fitnessId` int(10) NOT null,`instructor` varchar(100) NOT NULL,`room_number` int(7) NOT NULL,`capacity` int(7) NOT NULL,`start_time` datetime NOT NULL,`end_time` datetime NOT NULL)');
db.query('CREATE TABLE IF NOT EXISTS strength (`strengthId` int(10) NOT NULL primary key AUTO_INCREMENT,`fitnessId` int(10) NOT null,`instructor` varchar(100) NOT NULL,`room_number` int(7) NOT NULL,`capacity` int(7) NOT NULL,`start_time` datetime NOT NULL,`end_time` datetime NOT NULL)');

app.use('/',gymRouter);
app.listen(8080);
