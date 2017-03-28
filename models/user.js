//========================IMPORTS=======================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
//====================================================================================
//===========================DESIGNING SCHEMA=========================================
var dataSchema = new Schema(
    {
        username:
            {
                type : String,
                unique : true
            },
        password: String,
        logged : Boolean,
    },
    {
        timestamps : true
    }
);
//====================================================================================
//===========================IMPLEMENTATION===========================================
dataSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User',dataSchema);
//====================================================================================
module.exports=User
