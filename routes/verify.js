var User = require('../models/user');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config.js');
var express = require('express');
var app = express();

exports.getToken = function(user) {
    console.log("Successs!!!!"+user+"   \n"+user);
    return jwt.sign({data:user},config.secretKey,{
        expiresIn: 10
    });
    console.log("Successs!!!!"+user.admin+"   \n"+user);
};

exports.verifyOrdinaryUser = function(request, response, next) {
    // check header or url parameters or post parameters for token
    var token = request.body.token || request.query.token || request.headers['x-access-token'];
    console.log(token);
    console.log(request.query.token);
    console.log(request.body.token);
    console.log(request.headers['x-access-token']);
    if (token) {
        jwt.verify(token, config.secretKey, function(err, decoded) {
            if (err) {
                if (err.name == "TokenExpiredError"){
                    decoded = jwt.decode(token);
                    console.log(decoded.data);
                    decoded.data.logged = false;
                    User.findByIdAndUpdate(decoded.data._id, {$set: decoded.data},
                        {new: true}, function (error, new_data) {
                            if (error)
                                throw error;
                            else
                            {
                                console.log(new_data);
                                response.json('Token Expired');
                            }
                        });
                }
            }
            else
            {
                // if everything is good, save to request for use in other routes
                console.log(decoded);
                next();
            }
        });
    }
    else
    {
        // if there is no token
        // return an error
        var err = new Error('No token provided!');
        //err.status = 403;
        response.json(err);
    }
};