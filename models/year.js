//========================IMPORTS=======================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//====================================================================================
//===========================DESIGNING SCHEMA=========================================
var yearSchema;
yearSchema = new Schema(
    {
        y :
        {
            type : Number
        },
        intake: {
            type: Number
        },
        enrolled: {
            type: Number
        },
        passed: {
            type: Number
        },
        placed: {
            type: Number
        },
        instituteid: {
            type: mongoose.Schema.Types.ObjectId,
                ref : 'Institution'
        }
    },
    {
        timestamps : true
});
//====================================================================================
//===========================IMPLEMENTATION===========================================
var year = mongoose.model('Year',yearSchema);
//year.aggregate({$group : {"y" : 1}});
//====================================================================================
module.exports=year;
