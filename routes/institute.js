//========================IMPORTS====================================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Institute = require('../models/institution');
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
        Institute.create(request.body, function (err, data) {
            if (err) throw err;
            console.log('institute added!');
            response.json(data);
        });
    });
institute.route('/update')
.post(function(request,response) {
    console.log(request.body);
    Institute.find({'name': request.body.name},function(err, data){
        if(err)
            response.json(err);
        else if(data[0]==undefined)
            response.json("No such entry!");
        else
        {
            console.log(data);
            id = data[0];
            if(request.body.insttype)
            {
                data[0].insttype =request.body.insttype;
            }
            if(request.body.minority)
            {
                data[0].minority =request.body.minority;
            }
            if(request.body.women)
            {
                data[0].women =request.body.women;
            }
            if(request.body.ApprovalStatus)
            {
                data[0].ApprovalStatus =request.body.ApprovalStatus;
            }
            console.log(data);
            data[0].save(function (err,new_data){
                if(err)
                    response.json(err);
                else
                {
                    response.json(new_data);
                }
            });
        }
    }).limit(1);
});
//====================================================================================
module.exports=institute;
