const getData = require('./machineService').getData;

function getAllMachines(_req, res) {
    return res.json({
        success: true,
        data: [{id:1, nom:"machine 1"},{id:2, nom:"machine 2"}]
    });
}

function getMachine(req, res) {
    const requiredMachineId = req.params.machine
    
    if(requiredMachineId) {
		getData(requiredMachineId).then( 
			machine => res.status(200).json({ success: true, data: machine })
		).catch(
			err => res.status(404).json({ success: false, data: err })
		);
	} else {
		res.statut(404).json({ success: false, data: 'Veuillez renseigner un ID de machine.' })
	}

}

module.exports = { getAllMachines, getMachine }