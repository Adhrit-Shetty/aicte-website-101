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
var _ = require('underscore');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));
//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
router.get('/',function(request,response) {
      console.log(request.body);
    Institute.find({},function (err, idata) {
        if (err)
            response.json(err);
        else if (idata == undefined)
            response.json("No such entry!");
        else {
            console.log(idata);
            var query = {
                $and:[{},{'instituteid':{$in :idata}}]};
            Year.find(query,{"_id" : 0,"y" : 1,"intake" : 1,"passed" : 1,"placed" : 1,"enrolled" : 1,"instituteid" : 1})
                .populate('instituteid',{'name' :1 ,"_id" : 0})
                .sort({"y" : 1,"instituteid": -1})
                .exec(function (err, ydata) {
                if (err)
                    response.json(err);
                else if (ydata == undefined)
                    response.json("No such entry!");
                else {
						var tmp = _.groupBy(ydata,"y",function(d){
							return d;
						});
						var out = _(tmp).map(function(g, key) {
						    return {
						                           y: key,
						                           intake: _(g).reduce(function (m, x) {
						                               return m + x.intake;
						                           }, 0),
						                           enrolled: _(g).reduce(function (m, x) {
						                               return m + x.enrolled;
						                           }, 0),
						                           passed: _(g).reduce(function (m, x) {
						                               return m + x.passed;
						                           }, 0),
						                           placed: _(g).reduce(function (m, x) {
						                               return m + x.placed;
						                           }, 0)
						                       }
						                   });
						                   response.json(out);                }
            });
        }

    });
});


router.post('/',function(request,response) {
    console.log(request.body);
	var d = Verify.trim_nulls(request.body.institute);
	var d1 = Verify.trim_nulls(request.body.year);
	console.log(d1);
    Institute.find(d,function (err, idata) {
        if (err)
            response.json(err);
        else if (idata[0] == undefined)
            response.json("No such entry!");
        else {
            console.log(idata);
            var query = {
                $and:[d1,{'instituteid':{$in :idata}}]};
            Year.find(query,{"_id" : 0,"y" : 1,"intake" : 1,"passed" : 1,"placed" : 1,"enrolled" : 1,"instituteid" : 1})
                .populate('instituteid',{'name' :1 ,"_id" : 0})
                .sort({"instituteid": -1,"y" : 1})
                .exec(function (err, ydata) {
                if (err)
                    response.json(err);
                else if (ydata[0] == undefined)
                    response.json("No such entry!");
                else {
						var tmp = _.groupBy(ydata,"instituteid",function(d){
							return d;
						});
					response.json(tmp);                }
            });
        }

    });
});
//====================================================================================
module.exports=router;
