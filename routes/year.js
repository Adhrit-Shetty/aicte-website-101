//========================IMPORTS=======================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var url = 'mongodb://localhost:27017/Aicte101';
var Year = require('../models/year');
var Institute = require('../models/institution');

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
    Institute.find({'name': request.body.name},{'_id' : 1},function(err, data){
        if(err)
            response.json(err);
        else
        {
            console.log(data);
            Year.create({'intake' : request.body.intake,'enrolled' : request.body.enrolled,
            'passed' : request.body.passed,'placed' : request.body.placed,
            'instituteid' : data[0]},function (error,new_data){
                if(err)
                    response.json(err);
                else
                {
                    console.log(new_data);
                    Institute.findById(data[0],function(err,inst_data){
                        if(err)
                            response.json(err);
                        else
                        {
                            inst_data.year.push(new_data._id);
                            inst_data.save(function(err,new_inst_data){
                                if(err)
                                    response.json(err);
                                else
                                {
                                    response.json(new_inst_data}, new_data);
                                }
                            });
                        }
                    });
                }
            });
        }
        }).limit(1);
    });
//====================================================================================
module.exports=router;
