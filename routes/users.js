var express = require('express');
var router = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var config = require('./config.js');
var User = require('../models/user');
var passport = require('passport');
var Verify = require('./verify');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));
//====================================================================================
//===========================IMPLEMENTATION===========================================
router.use(morgan('dev'));
//====================================================================================
//===========================ROUTING==================================================
    router.post('/register', function(request, response){
        User.register(new User({ username : request.body.username }),
            request.body.password,function(err, user){
            if(err)
            {
                return response.status(500).json({err: err});
            }
            user.logged =false;
            console.log(user);
            user.save(function(err,user){
                if(err)
                    throw err;
                else
                {
                    passport.authenticate('local')(request, response, function () {
                        return response.status(200).json({status: 'Registration Successful!'});
                    });
                }
            });
        });
    });
    router.post('/login',function(request, response,next){
        passport.authenticate('local',function(err,user,info){
            console.log("\n\n\n\n");
            console.log(info);
            if (err) {
                return next(err);
            }
            if (!user) {
                return response.status(401).json({
                    err: info
                });
            }
            if (user.logged==true) {
                return response.status(401).json({
                    err: "Already logged in"
                });
            }
            request.logIn(user, function(err) {
                if (err) {
                    return response.status(500).json({
                        err: 'Could not log in user'
                    });
                }
                user.logged =true;
                user.save(function (err,new_data){
                    if(err)
                      response.json(err);
                    else
                    {
                        console.log(new_data);
                        var t = Verify.getToken(user);
                        console.log("Successs!!!!" + user.admin + "   \n" + user);
                        response.status(200).json({
                            status: 'Login successful!',
                            success: true,
                            token: t
                        });
                    }
                });
            });
        })(request,response,next);
    });

    router.get('/logout',Verify.verifyOrdinaryUser,function(request, response){
        console.log("\n\n\nINSIDE!!!\n\n");
         var token = request.body.token || request.query.token || request.headers['x-access-token'];
         jwt.verify(token, config.secretKey, function(err, decoded){
             if (err) {
                 response.json(err);
             }
             else
             {
                decoded.data.logged = false;
                console.log(decoded.data);
                User.findByIdAndUpdate(decoded.data._id,{$set : decoded.data},
                    { new : true},function(error,new_data){
                        if(error)
                             throw error;
                        else
                        {
                            console.log(new_data);
                            request.logout();
                            response.status(200).json({
                                status: 'Bye!'
                            });
                        }
                    });
             }
                //});
            //}
        });
    });
//====================================================================================
module.exports = router;
