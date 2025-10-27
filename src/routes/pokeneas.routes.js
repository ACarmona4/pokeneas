const router = require('express').Router();
const ctrl = require('../controllers/pokeneas.controller');

router.get('/pokeneas/basic', ctrl.getBasicInfo);
router.get('/pokeneas/show', ctrl.getImageAndQuote);

module.exports = router;