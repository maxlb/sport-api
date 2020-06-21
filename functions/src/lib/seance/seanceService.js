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

const updateSeance = (idSeance, seance) => {
	return new Promise((resolve, reject) => {
    db.doc(`exercices/${idSeance}`)
      .update(seance)
      .then(() => resolve(seance))
      .catch(err => reject(err));
	});
}

const setScore = (idSeance, score) => {
	return new Promise((resolve, reject) => {
    getSeanceByID(idSeance)
      .then( seance => resolve( dataService.putScoreInSeance(seance, score) ) )
      .catch(err => reject(err))
	});
}

module.exports = { getSeanceByID, setScore, getSeanceByUser, updateSeance };