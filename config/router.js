const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/', controller.getHomepage)
router.all('/add-feed', controller.postNewFeed)
router.get('/feed/:id', controller.showOneFeed)
router.all('/feed/edit/:id', controller.updateOneFeed)
router.get('/delete-feed/:id', controller.deleteOneFeed)



module.exports = router


