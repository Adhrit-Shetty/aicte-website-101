//========================IMPORTS=======================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//====================================================================================
//===========================DESIGNING SCHEMA=========================================
var announcement = new Schema(
    {
        name:
            {
                type : String,
                required : true,
                unique : true
            },
        href:
            {
                type : String,
                required : true,
                unique : true
            }
    },
    {
        timestamps : true
    }
);
//====================================================================================
//===========================IMPLEMENTATION===========================================
var A = mongoose.model('Announcement',announcement);
//====================================================================================
module.exports=A;
