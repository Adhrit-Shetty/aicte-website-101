//========================IMPORTS=======================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var Institute = require('../models/institution');
var Year = require('../models/year');
var Verify = require('./verify');
var router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));
//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
router.post('/',function(request,response) {
    console.log(request.body);
    var i,j;
    Institute.find(request.body.institute, function (err, data) {
        var out =[];
        if (err)
            response.json(err);
        else if (data == undefined)
            response.json("No such entry!");
        else {
            console.log("\n\n:FOUND I:" + data + "\n\n");
            for (i = 0; i < data.length; i++) {
                for (j = 0; j < data[i].year.length; j++) {
                    Year.findOne({$and: [request.body.year, {'_id': data[i].year[j]}]}, function (err, result) {
                        if (err)
                            throw err;
                        else if (result != undefined) {
                            console.log("FOUND Y:" + i + j + " " + result.intake);
                            out.push({
                                intake: result.intake,
                                enrolled: result.enrolled,
                                passed: result.passed,
                                placed: result.placed
                            });
                            console.log(out);
                        }
                    });
                }
            }
            Institute.find(request.body.institute, function (err, data) {
                response.json(out);
            });
        }
    });
});
//====================================================================================
module.exports=router;
