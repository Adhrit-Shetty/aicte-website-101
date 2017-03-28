//========================IMPORTS=======================================
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var passport = require('passport');
var User = require('../models/user.js');
var register = express.Router();
//====================================================================================
//===========================IMPLEMENTATION===========================================
register.use(bodyParser.json());
register.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
register.route('/')
    .post(function(request,response){
        console.log(request.body);
        User.register(new User({username : request.body.username}),
        request.body.password, function(err, user){
            if (err)
            {
                throw err
            }
            else
            {
                passport.authenticate('local', {successRedirect: '/'})(request, response, function () {
                    console.log('Registration Successful!'+user);
                });
            }
        });
    });
//====================================================================================
module.exports=register;
