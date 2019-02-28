
var World = require('../models/maker');

module.exports= {
changeWorld,
updateWorld,
deleteWorld
};

function changeWorld(req, res){
    console.log('changeWorld function');
        World.findById(req.params.id, function(err, worldFound) { 
            res.render('worlds/changeWorld', { title: 'World Detail', world: worldFound});
          })  
}
function updateWorld(req, res) {
    console.log(req.body, 'this is the update path')
    console.log(req.params.id)
    World.findByIdAndUpdate(req.params.id, req.body, function(err, world){
    // world.change = req.body.change;
          world.updated_at = Date.now();
          world.save( function ( err, world){
          });
          res.redirect( '/' + req.params.id);
        });
    
}

function deleteWorld(req, res) {
    console.log('delete function')
    World.findByIdAndDelete(req.params.id, function(error, deletedWorld){
        if(error){
            console.log(error)
        } else {
        console.log(deletedWorld, 'This world was deleted')
        res.redirect('/')
        }
    });
    
}