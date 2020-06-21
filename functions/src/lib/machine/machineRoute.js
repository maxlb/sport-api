const router     = require('express').Router();
const controller = require('./machineController');

router.get('/all',      controller.getAllMachines);
router.get('/:machine', controller.getMachine);

module.exports = router;