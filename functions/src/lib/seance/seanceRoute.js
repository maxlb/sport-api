const router     = require('express').Router();
const controller = require('./seanceController');

router.get('/all',      controller.getAllSeances);
router.get('/:seance', controller.getSeance);

module.exports = router;