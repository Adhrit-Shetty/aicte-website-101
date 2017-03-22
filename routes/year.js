//========================IMPORTS=======================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var url = 'mongodb://localhost:27017/Aicte101';
var Inst = require('../models/year');

var institute = express.Router();
institute.use(bodyParser.json());
institute.use(bodyParser.urlencoded({extended : true}));
//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
institute.route('/')
    .post(function(request,response,next){
        console.log(request.body);


    });
//====================================================================================
module.exports=institute;
