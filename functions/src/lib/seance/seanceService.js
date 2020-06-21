const getDB = require("../../db").getDB;
const db    = getDB();

const getData = (id) =>  {
    
	return new Promise((resolve, reject) => {
		db.doc(`exercices/${id}`).get().then(
		    seance => {
                if(seance.data()) {
                    return resolve(seance.data());
                } else {
                    return reject(new Error("La séance n'existe pas..."));
                }
            }
        ).catch(
            err => reject(err)
        );
	});
}

const setMachineScore = (idSeance, score) => {
	return new Promise((resolve, reject) => {
		getData(idSeance).then(
            seance => {
				// On vérifie si l'exercice existe
                const indexMachine = seance.machines.findIndex(elem => elem.idMachine === score.idMachine)
				if (indexMachine < 0) {
					// Si non, on l'ajoute
					seance.machines.push(score)
				} else {
					// Si oui, on le met à jour
					seance.machines[indexMachine] = score
                }
				db.doc(`exercices/${idSeance}`).update(seance)
					.then(() => resolve(seance))
					.catch(err => reject(new Error(err)))
			})
			.catch(err => reject(new Error(err)))
	});
}

module.exports = { getData, setMachineScore };