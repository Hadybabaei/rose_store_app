const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const tokensSchema = mongoose.Schema({
    token:String,
    user:{type:mongoose.Schema.Types.ObjectId}
})

tokensSchema.plugin(timestamp);

exports.Token = mongoose.model('Tokens',tokensSchema)