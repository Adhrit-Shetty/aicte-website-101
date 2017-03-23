//========================IMPORTS=======================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var url = 'mongodb://localhost:27017/Aicte101';
var Announcement = require('../models/announcement');

var A = express.Router();
A.use(bodyParser.json());
A.use(bodyParser.urlencoded({extended : true}));
//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
A.route('/')
    .post(function(request,response){
        Announcement.find({},{natural : -1},function(err,data){
            console.log("INSIDE!!!");
            if(err)
                response.json(err);
            else
            {
                response.json(data);
            }
        });
    });
//====================================================================================
module.exports=A;
