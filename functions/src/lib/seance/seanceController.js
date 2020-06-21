const getData = require('./seanceService').getData;

function getAllSeances(_req, res) {
    return res.json({
        success: true,
        data: [{id:1, nom:"seance 1"},{id:2, nom:"seance 2"}]
    });
}

function getSeance(req, res) {
    const requiredSeanceId = req.params.seance
    
    if(requiredSeanceId) {
		getData(requiredSeanceId).then( 
			seance => res.status(200).json({ success: true, data: seance })
		).catch(
			err => res.status(404).json({ success: false, data: err })
		);
	} else {
		res.statut(404).json({ success: false, data: 'Veuillez renseigner un ID de séance.' })
	}

}

module.exports = { getAllSeances, getSeance };