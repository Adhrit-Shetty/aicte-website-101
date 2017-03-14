//========================IMPORTS=======================================
var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var fs = require('fs');
var hostname = "localhost";
var port = 3000;
var home = express.Router();
home.use(bodyParser.json());
//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
home.route('/')  //add routes as per demand
   .all(function(request,response,next){
        console.log("\n\nin!\n\n");
        next();
    })
//====================================================================================
module.exports=home;
