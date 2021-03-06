//========================IMPORTS=======================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var Announcement = require('../models/announcement');
var A = express.Router();
//====================================================================================
//===========================IMPLEMENTATION===========================================
A.use(bodyParser.json());
A.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
A.route('/')
    .post(function(request,response){
        Announcement.find({},{"_id" : 0, "date" :1,"name" : 1,"href" : 1},{sort : {"date" :-1}},function(err,data){
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
