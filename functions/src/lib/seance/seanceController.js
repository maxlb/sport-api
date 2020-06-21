const seanceService = require('./seanceService');

const getAllSeances = (_req, res) => {
    return res.json({
        success: true,
        data: [{id:1, nom:"seance 1"},{id:2, nom:"seance 2"}]
    });
}

const getSeance = (req, res) => {
    const requiredSeanceId = req.params.seance
    
    if(requiredSeanceId) {
		seanceService.getSeanceByID(requiredSeanceId).then( 
			seance => res.status(200).json({ success: true, data: seance })
		).catch(
			err => res.status(404).json({ success: false, data: err })
		);
	} else {
		res.statut(404).json({ success: false, data: 'Veuillez renseigner un ID de séance.' })
	}

}

const getSeanceByUser = (req, res) => {
    const requiredUserId = req.params.user
    
    if(requiredUserId) {
		seanceService.getSeanceByUser(requiredUserId).then( 
			seances => res.status(200).json({ success: true, data: seances })
		).catch(
			err => res.status(404).json({ success: false, data: err })
		);
	} else {
		res.statut(404).json({ success: false, data: 'Veuillez renseigner un ID d\' utilisateur.' })
	}

}

const setSeance = (req, res) => {
	const idSeance  = req.body.id;
	const score  = req.body.score;
  
  	if (idSeance && score) {
		seanceService.setMachineScore(idSeance, score).then( 
			seance => res.status(200).json({ success: true, data: seance })
		).catch(
			err => res.status(404).json({ success: false, data: err })
		);
	} else {
		res.statut(404).json({ success: false, data: 'Paramètres incomplets.' })
	}
}

module.exports = { getAllSeances, getSeance, setSeance, getSeanceByUser };