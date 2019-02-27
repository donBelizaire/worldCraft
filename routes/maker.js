var express = require('express');
var router = express.Router();
// var makerCtrl = require('../controller/maker');
// var changeCtrl = require('../controller/change')
var worldCtrl = require('../controller/world');

router.get('/', worldCtrl.home);
router.get('/new', worldCtrl.newWorld);
router.get('/:id', worldCtrl.showWorld);
router.post('/new', worldCtrl.createWorld);
// // router.put('/', makerCtrl.updateWorld);
// // router.delete('/', makerCtrl.deleteWorld);

module.exports = router;
