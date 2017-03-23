//========================IMPORTS=======================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var url = 'mongodb://localhost:27017/Aicte101';
var Institute = require('../models/institution');
var Year = require('../models/year');

var institute = express.Router();
institute.use(bodyParser.json());
institute.use(bodyParser.urlencoded({extended : true}));
var i,id;
//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
institute.route('/')
    .post(function(request,response,next) {
        console.log(request.body);
        Institute.find({'name': request.body.name},{'_id' :1},function(err, data){
            if(err)
                response.json(err);
            else if(data[0]==undefined)
                response.json("No such entry!");
            else
            {
                console.log(data);
                id = data[0];
                Year.find({'y': request.body.y , 'instituteid' : id},function(err,new_data){
                    console.log(new_data);
                    if(err)
                        response.json(err);
                    else if(new_data[0]==undefined)
                        response.json("No such entry!");
                    else
                    {
                        if(request.body.intake)
                        {
                            new_data[0].intake =request.body.intake;
                        }
                        if(request.body.enrolled)
                        {
                            new_data[0].enrolled =request.body.enrolled;
                        }
                        if(request.body.passed)
                        {
                            new_data[0].passed =request.body.passed;
                        }
                        if(request.body.placed)
                        {
                            new_data[0].placed =request.body.placed;
                        }
                        console.log(data);
                        new_data[0].save(function (err,final){
                            if(err)
                                response.json(err);
                            else
                            {
                                response.json(final);
                            }
                        });

                    }
                }).limit(1);
            }
        }).limit(1);
    });
//====================================================================================
module.exports=institute;
