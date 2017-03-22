//========================IMPORTS=======================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var url = 'mongodb://localhost:27017/Aicte101';
var year = require('../models/year');

var router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));
//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
router.route('/')
    .post(function(request,response,next){
        console.log(request.body);
    });
//====================================================================================
module.exports=router;
