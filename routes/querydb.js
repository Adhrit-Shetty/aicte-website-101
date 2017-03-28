//========================IMPORTS=======================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var async = require('async');
var Institute = require('../models/institution');
var Year = require('../models/year');
var Verify = require('./verify');
var router = express.Router();
var out = [];

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));
//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
router.post('/',function(request,response) {
    console.log(request.body);
    Institute.find(request.body.institute,function (err, idata) {
        if (err)
            response.json(err);
        else if (idata == undefined)
            response.json("No such entry!");
        else {
            console.log(idata);
            var query = {
                $and:[request.body.year,{'instituteid':{$in :idata}}]};
            Year.find(query,{"_id" : 0,"y" : 1,"intake" : 1,"passed" : 1,"placed" : 1,"enrolled" : 1,"instituteid" : 1})
                .populate('instituteid',{'name' :1 ,"_id" : 0})
                .sort({"instituteid": -1,"y" : -1})
                .exec(function (err, ydata) {
                if (err)
                    response.json(err);
                else if (ydata == undefined)
                    response.json("No such entry!");
                else {

                      response.json(ydata);
                }
            });
        }

    });
});
//====================================================================================
module.exports=router;
