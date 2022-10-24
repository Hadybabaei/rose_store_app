const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const categoriesSchema = mongoose.Schema({
    name:String,
    desc:String,
    thumbnail:{data:Buffer,contentType:String}
})

categoriesSchema.plugin(timestamp);

exports.Categories = mongoose.model('Categories',categoriesSchema)