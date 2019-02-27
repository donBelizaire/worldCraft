var express = require('express');
var router = express.Router();
var makerCtrl = require('../controller/maker');
var changeCtrl = require('../controller/change')
var worldCtrl = require('../controller/world');

router.get('/', worldCtrl.home);
router.get('/new', worldCtrl.newWorld);
router.get('/:id', worldCtrl.showWorld);
router.post('/new', worldCtrl.createWorld);
router.post('/worlds/:id/change', changeCtrl.create);
router.get('/worlds/:id', makerCtrl.changeWorld)
router.put('/worlds/:id', makerCtrl.updateWorld)
router.delete('/worlds/:id', makerCtrl.deleteWorld);

module.exports = router;
