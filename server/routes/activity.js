var express = require('express');
var router = express.Router();

const activityController = require('../controllers/activity');
const { wrapAsync } = require('../../shared/utils/helper');
const { isAuthenticated } = require('../utils/auth');

// router.use(isAuthenticated);
router.post('/', wrapAsync(activityController.create));
router.get('/:id/:month', wrapAsync(activityController.getByMonth));
router.put('/', wrapAsync(activityController.update));
router.delete('/:id', wrapAsync(activityController.delete));

module.exports = router;
