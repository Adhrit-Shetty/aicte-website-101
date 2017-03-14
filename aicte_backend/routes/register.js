//========================IMPORTS=======================================
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var fs = require('fs');
var passport = require('passport');
var User = require('../models/user.js');
//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
var register = express.Router();
register.use(bodyParser.json());
register.route('/')
    .post(function(request,response,next){
        console.log(request.body);
        addUser(request,response);
       })
    .get(function(request,response,next){
        next();
    });
//====================================================================================
//=========================FUNCTIONS==================================================
function addUser(request,response)
{
    User.register(new User({username : request.body.username, mobno : request.body.mobno}),
        request.body.password, function(err, user){
        if (err)
        {
            throw err
        }
        else
        {
            if(request.body.Fname)
                user.Fname = request.body.Fname;
            if(request.body.Mname)
                user.Mname = request.body.Mname;
            if(request.body.Lname)
                user.Lname = request.body.Lname;
            user.save(function (err, user){
                if (err)
                    throw err;
                else
                    passport.authenticate('local', {successRedirect: '/'})(request, response, function () {
                        console.log('Registration Successful!');

                    });
            });
        }
    });
}
//====================================================================================
module.exports=register;
