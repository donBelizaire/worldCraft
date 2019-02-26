const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var shaperSchema = new Schema({
// //   user_id: {
// //     type: null,
// //   },
//   author: {
//     name: String,
//     email: String
//   }
// });

var changesSchema = new Schema({
    changeTitle: String,
    changeTxt: String,
    shaper: [shaperSchema]
})

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
    maker: [{type: Schema.Types.ObjectId, ref: 'Maker'}]
    
});

module.exports = mongoose.model('Shaper', shaperSchema);
