const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const articleSchema = mongoose.Schema({
    category : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Categories'
    },
    title:String,
    slug:String,
    desc:String,
    body:String,
    tags:String,
    comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comments'
    },
    thumbnail:{data:Buffer,contentType:String}
})

articleSchema.plugin(timestamp)

exports.Articles = mongoose.model('Articles',articleSchema)