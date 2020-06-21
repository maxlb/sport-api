const getDB = require("../../db").getDB;
const dataService = require('../shared/dataService');
const db    = getDB();

const getSeanceByID = (id) =>  {
	return new Promise((resolve, reject) => {
        db.doc(`exercices/${id}`)
          .get()
          .then( seance => resolve(dataService.getValidValue(seance)) )
		  .catch( err => reject(err) );
	});
}

const getSeanceByUser = (idUser) =>  {
	return new Promise((resolve, reject) => {
        db.collection(`exercices`)
          .where('idUser', '==', idUser)
          .get()
          .then( seances => resolve(dataService.getValidValues(seances)) )
          .catch( err => reject(err) );
	});
}

const setMachineScore = (idSeance, score) => {
	return new Promise((resolve, reject) => {
		getSeanceByID(idSeance).then(
            seance => {
                const indexMachine = seance.machines.findIndex(elem => elem.idMachine === score.idMachine)
                indexMachine > 0 ? seance.machines[indexMachine] = score : seance.machines.push(score)
                db.doc(`exercices/${idSeance}`)
                  .update(seance)
				  .then(() => resolve(seance))
				  .catch(err => reject(err))
			})
			.catch(err => reject(err))
	});
}

module.exports = { getSeanceByID, setMachineScore, getSeanceByUser };