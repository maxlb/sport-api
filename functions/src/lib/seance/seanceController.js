const seanceService = require('./seanceService');
const resp 			= require('../shared/httpResponseService');

const getSeance = (req, res) => {
	const requiredSeanceId = req.params.seance
    if(requiredSeanceId) {
		seanceService.getSeanceByID(requiredSeanceId)
			.then( seance => resp.manageSuccessResponse(res, seance) )
			.catch(	err => resp.manageFailureResponse(res, err) );
	} else {
		resp.manageFailureResponse(res, Error('Veuillez renseigner un ID de séance.'));
	}
}

const getSeanceByUser = (req, res) => {
    const requiredUserId = req.params.user
    if(requiredUserId) {
		seanceService.getSeanceByUser(requiredUserId)
			.then( seances => resp.manageSuccessResponse(res, seances) )
			.catch( err => resp.manageFailureResponse(res, err) );
	} else {
		resp.manageFailureResponse(res, Error('Veuillez renseigner un ID d\' utilisateur.'));
	}
}

const setSeance = (req, res) => {
	const idSeance  = req.body.id;
	const score  = req.body.score;
  	if (idSeance && score) {
		seanceService.setMachineScore(idSeance, score)
			.then( seance => resp.manageSuccessResponse(res, seance) )
			.catch( err => resp.manageFailureResponse(res, err) );
	} else {
		resp.manageFailureResponse(res, Error('Paramètres incomplets.'));
	}
}

module.exports = { getSeance, setSeance, getSeanceByUser };