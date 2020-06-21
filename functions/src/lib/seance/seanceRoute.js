const router     = require('express').Router();
const controller = require('./seanceController');

router.get('/byUser/:user',  controller.getSeanceByUser);
router.get('/:seance',       controller.getSeance);
router.post('/',             controller.setSeance);

module.exports = router;