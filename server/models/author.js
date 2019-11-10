const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name : String,
    age : Number,
})

var Author = mongoose.model('Author' , authorSchema);

module.exports =  Author;
