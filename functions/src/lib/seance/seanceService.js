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

module.exports = { getData };