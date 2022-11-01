const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp')

const usersSchema = mongoose.Schema({
    name:String,
    lastname:String,
    email:String,
    phone:Number,
    password:String,
    status:Boolean,
    role:String,
})

usersSchema.plugin(timestamp)

exports.Users = mongoose.model('Users',usersSchema)