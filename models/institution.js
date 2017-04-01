//========================IMPORTS=======================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//====================================================================================
//===========================DESIGNING SCHEMA=========================================
var dataSchema = new Schema(
    {
        name: {
            type: String,
            unique: true
        },
        insttype: {
            type: String
        },
        minority: {
            type: Boolean
        },
        women: {
            type: Boolean
        },
        ApprovalStatus: {
            type: String
        },
        year: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Year'
        }]
    },
    {
        timestamps : true
    }
);
//====================================================================================
//===========================IMPLEMENTATION===========================================
var institution = mongoose.model('Institution',dataSchema);
//====================================================================================
module.exports= institution;