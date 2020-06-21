const getDB = require("../../db").getDB;
const db    = getDB();

const getData = (id) =>  {
    
	return new Promise((resolve, reject) => {
		db.doc(`machines/${id}`).get().then(
		    machine => {
                if(machine.data()) {
                    return resolve(machine.data());
                } else {
                    return reject(new Error("La machine n'existe pas..."));
                }
            }
        ).catch(
            err => reject(err)
        );
	});
}

module.exports = { getData };