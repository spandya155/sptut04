var mongoose = require('mongoose');
var userschema = mongoose.Schema({
    name:String,
    rollno:Number
})
module.exports = mongoose.model('UserDetails',userschema) 