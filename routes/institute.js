//========================IMPORTS====================================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Inst = require('../models/institution');
var institute = express.Router();
//====================================================================================
//===========================IMPLEMENTATION===========================================
institute.use(bodyParser.json());
institute.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
institute.route('/')
    .post(function(request,response){
        console.log(request.body);
        Inst.create(request.body, function (err, data) {
            if (err) throw err;
            console.log('institute added!');
            response.json(data);
        });
    });
//====================================================================================
module.exports=institute;
