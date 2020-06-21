const router     = require('express').Router();
const controller = require('./seanceController');

router.get('/all',      controller.getAllSeances);
router.get('/:seance',  controller.getSeance);
router.post('/',  controller.setSeance);

module.exports = router;