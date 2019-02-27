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

var changesSchema = new Schema({
    changeTitle: String,
    changeTxt: String,
    maker: [makerSchema]
});

var worldSchema = new Schema({
    worldTitle: String,
    background: String,
    technologie: String,
    time: String,
    culture: String,
    combatTech: String,
    history: String,
    supernaturalEl: String,
    changes: [changesSchema],
    maker: [makerSchema]
    
});

module.exports = mongoose.model('World', worldSchema);
