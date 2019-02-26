const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var makerSchema = new Schema({
    //   user_id: {
//     type: null,
//   },
  author: {
    name: String,
    email: String
  }
    
});

module.exports = mongoose.model('Maker', makerSchema);
