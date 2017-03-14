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
                required : true,
                unique : true
            },
        password: String,
        Fname :
            {
                type : String,
            },
        Mname :
            {
                type : String,
            },
        Lname :
            {
                type : String,
            },
        mobno:
            {
                type:String,
                unique:true,
                validate:
                    {
                        validator: function(v)
                        {
                            return /^([0-9]{10}$)/.test(v);
                        }
                    },
                required: true
            },
        admin:   {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps : true
    }
);
//====================================================================================
//===========================IMPLEMENTATION===========================================
dataSchema.plugin(passportLocalMongoose);
var User = mongoose.model('user',dataSchema);
//====================================================================================
module.exports=User
