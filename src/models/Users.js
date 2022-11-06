const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp')

const usersSchema = mongoose.Schema({
    name:String,
    lastname:String,
    email:String,
    phone:Number,
    password:String,
    status:{type:Boolean,default:true},
    role:{type:String,default:"user"},
    avatar:{data:Buffer,contentType:String,default:""}
})

usersSchema.plugin(timestamp)

exports.Users = mongoose.model('Users',usersSchema)