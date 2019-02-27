// var Maker = require('../models/maker');
var World = require('../models/maker');

module.exports = {
    home,
    showWorld,
    newWorld,
    createWorld
};

function home(req, res) {
    World.find({}, function(err, worlds) {
        console.log('this is the home controller');

        res.render('worlds/home', { title: 'Avalible Worlds', worlds: worlds });
    });
}

function showWorld(req, res) {
        console.log('show function');
        World.findById(req.params.id, function(err, worldFound) { 
            res.render('worlds/showWorld', { title: 'World Detail', world: worldFound});
          })  
        };

function newWorld(req, res) {
    console.log('new path')
    res.render('worlds/createWorld')
}

function createWorld(req, res) {
    console.log('world was created');
    var world = new World(req.body);
  world.save(function(err) {
    if (err) return res.redirect('/worlds/new');
    res.redirect('/');
    // res.redirect(`/worlds/${world._id}`);
  });
}