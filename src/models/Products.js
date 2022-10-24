const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const productsSchema = mongoose.Schema({
    category : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Categories'
    },
    name:String,
    description:String,
    price:String,
    thumbnail:{data:Buffer,contentType:String}
})

productsSchema.plugin(timestamp)

exports.Product = mongoose.model('Products',productsSchema)