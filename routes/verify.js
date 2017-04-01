var User = require('../models/user');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config.js');
var express = require('express');
var Institute = require('../models/institution');
var Year = require('../models/year');
var app = express();

exports.getToken = function(user) {
    console.log("Successs!!!!"+user+"   \n"+user);
    return jwt.sign({data:user},config.secretKey,{
        expiresIn: 3600
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
                else {
                    response.json(err);
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
        response.json(err);
    }
};
exports.verifyInstitute = function (request,response,next){
    console.log(request);
    Institute.find({name:request.body.name},function (err, idata) {
        if(idata[0]==undefined)
            next();
        else {
            response.json("Institute Already Present");
        }
    });
}

exports.verifyInstitute = function (request,response,next){
    console.log(request);
    Institute.find({name:request.body.name},function (err, idata) {
        if(idata[0]==undefined)
            next();
        else {
            response.json("Institute Already Present");
        }
    });
}

exports.verifyYear = function (request,response,next){
    console.log(request);
    Institute.find({name:request.body.name},function (err, idata) {
        if(idata[0]==undefined)
        {
            response.json("No such Institute");
        }
        else {
            console.log(idata);
            Year.find({'y': request.body.y , 'instituteid' : idata[0]._id},function(err,new_data){
                if(new_data[0]==undefined)
                    next();
                else {
                    response.json("Year data already present");
                }
            });
        }
    }).limit(1);
}
exports.trim_nulls = function (data) {
    var y;
    for (var x in data) {
        y = data[x];
        if (y==="null" || y===null || y==="" || typeof y === "undefined" || (y instanceof Object && Object.keys(y).length == 0)) {
            delete data[x];
        }
        if (y instanceof Object) y = trim_nulls(y);
    }
    return data;
}

//db.users.find().pretty()
// db.users.update({"username":"A"},{$set:{"logged":false}})
//db.users.drop()
