const mongoose = require('mongoose');
const config = require('config');

const dbUri = config.get('dbUri')

exports.dbcon  = async () => {
    try {
      const connection = await mongoose.connect(dbUri);
      console.log(`Connected to database`);
    } catch (err) {
      console.error(err);
    }
  }