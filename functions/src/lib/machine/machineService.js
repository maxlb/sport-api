const getDB = require("../../db").getDB;
const dataService = require('../shared/dataService')
const db    = getDB();

const getData = (id) =>  {
	return new Promise((resolve, reject) => {
        db.doc(`machines/${id}`)
          .get()
          .then( machine => resolve(dataService.getValidValue(machine)) )
          .catch( err => reject(err) );
	});
}

const getAllMachines = () =>  {
	return new Promise((resolve, reject) => {
        db.collection(`machines`)
          .get()
          .then( machines => resolve(dataService.getValidValues(machines)) )
          .catch( err => reject(err) );
	});
}

module.exports = { getData, getAllMachines };