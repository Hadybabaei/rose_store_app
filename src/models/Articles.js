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
    tags:{type:String,default:null},
    comments:{type:[{}],default:null},
    thumbnail:{data:Buffer,contentType:String}
})

articleSchema.plugin(timestamp)

exports.Articles = mongoose.model('Articles',articleSchema)