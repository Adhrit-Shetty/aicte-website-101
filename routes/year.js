//========================IMPORTS=======================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Year = require('../models/year');
var Institute = require('../models/institution');
var router = express.Router();
var id;
//====================================================================================
//===========================IMPLEMENTATION===========================================
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
router.route('/')
    .post(function(request,response){
        console.log(request.body);
        Institute.find({'name': request.body.name},{'_id' : 1},function(err, data){
            if(err)
                response.json(err);
            else
            {
                console.log(data);
                Year.create({'y':request.body.y,'intake' : request.body.intake,'enrolled' : request.body.enrolled,
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
                                        response.json([new_inst_data,new_data]);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }).limit(1);
    });
router.route('/update')
    .post(function(request,response) {
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
module.exports=router;