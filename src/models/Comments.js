const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp')

const commentsSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'},
    parent:{type:mongoose.Schema.Types.ObjectId,nullable:true},
    body:String,
})

commentsSchema.plugin(timestamp);

exports.Comments = mongoose.model('Comments',commentsSchema)