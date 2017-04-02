//========================IMPORTS=======================================
var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var Announcement = require('../models/announcement');
var _ = require('underscore');
var A = express.Router();
A.use(bodyParser.json());
A.use(bodyParser.urlencoded({extended : true}));

//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
A.route('/')
    .get(function(request,response) {
        var out =[];
        Announcement.find({},{"_id" : 0, "date" :1,"name" : 1,"href" : 1},{sort : {"date" :-1}},function(err,data){
            console.log("INSIDE!!!");
            if(err)
                response.json(err);
            else
            {
                console.log(out);
                var i;
                for(i=1;i<data.length;i++) {
					if ((i+1) % 3 == 0) {
						out.push([data[i-2],data[i-1],data[i]]);
					}
				}
				if((i)%3==1)
                {
                    out.push([data[i-1]]);
                }
                else
                    if((i+1)%3==2)
                    {
                        out.push([data[i-1],data[i]])
                    }
                console.log(out);

                response.json(out);
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
module.exports=A;
