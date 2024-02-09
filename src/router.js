const router = require('express').Router();
const homeController = require('../src/Controllers/homeController');
const userController = require('../src/Controllers/userController');

router.use(homeController);
router.use('/users', userController);

module.exports = router;