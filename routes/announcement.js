//========================IMPORTS====================================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Announcement = require('../models/announcement');
var router = express.Router();
//====================================================================================
//===========================IMPLEMENTATION===========================================
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
router.route('/')
    .get(function(request,response){
        Announcement.find({},{"_id" : 0,"name" : 1,"href" : 1},{sort : {"date" : -1}},function(err,data){
            if(err)
                response.json(err);
            else
            {
                response.json(data);
            }
        });
    })
.post(function(request,response) {
        console.log(request.body);
        Announcement.create(request.body,function(err,data){
            if(err)
                response.json(err);
            else
            {
                response.json(data);
            }
        });
    });
//====================================================================================
module.exports=router;