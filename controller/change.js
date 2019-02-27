var World = require('../models/maker');

module.exports = {
  create
};

function create(req, res) {
    console.log('create story');
  World.findById(req.params.id, function(err, world) {
    world.changes.push(req.body);
    world.save(function(err) {
      res.redirect('/');
    });
  });
}