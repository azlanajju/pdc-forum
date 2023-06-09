const mongoose = require('mongoose');
const { Schema } =mongoose;


const userSchema = new mongoose.Schema({
    name :{
        type :String,
        required: true
    },
    email :{
        type :String,
        required: true,
        unique:true
    }, 
     phone :{
        type :Number,
        required: true
    },
    password :{
        type :String,
        required: true
    },
    Date :{
        type :Date,
        default: Date.now
    }

})

const User = mongoose.model('user', userSchema);
// User.createIndexes
module.exports = User;
