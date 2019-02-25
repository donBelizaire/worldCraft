var express = require('express');
var router = express.Router();
var shaperCtrl = require('../controller/shaper');

router.get('/', shaperCtrl.home);
// router.post('/', shaperCtrl.createStory);
// router.put('/', shaperCtrl.updateStory);
// router.delete('/', shaperCtrl.deleteStory);


module.exports = router;
