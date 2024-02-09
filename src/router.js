const router = require('express').Router();
const homeController = require('../src/Controllers/homeController');

router.use(homeController);

module.exports = router;