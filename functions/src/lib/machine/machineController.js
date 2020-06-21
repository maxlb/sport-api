const machineService = require('./machineService');
const resp 			 = require('../shared/httpResponseService');

function getAllMachines(_req, res) {
	machineService.getAllMachines()
		.then( machines => resp.manageSuccessResponse(res, machines) )
		.catch( err => resp.manageFailureResponse(res, err) );
}

function getMachine(req, res) {
    const requiredMachineId = req.params.machine
    if(requiredMachineId) {
		machineService.getData(requiredMachineId)
			.then( machine => resp.manageSuccessResponse(res, machine) )
			.catch(	err => resp.manageFailureResponse(res, err) );
	} else {
		resp.manageFailureResponse(res, Error('Veuillez renseigner un ID de machine.'));
	}
}

module.exports = { getAllMachines, getMachine }