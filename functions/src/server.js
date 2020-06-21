const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const initDB     = require("./db").initDB;
const resp 		 = require('./lib/shared/httpResponseService');
const app        = express(); 

initDB( err => {
    if(!err) {
        app.use(cors({ origin: true }))
           .use(bodyParser.json())
           .use(bodyParser.urlencoded({ extended: false }))
           .use('/machines', require('./lib/machine/machineRoute'))
           .use('/seances', require('./lib/seance/seanceRoute'))
           .get('*', (_, res) => resp.manageFailureResponse(res, Error('Cible introuvable')) );
    } else {
        throw new Error("Erreur lors de l'initialisation de la base de données : " + err.message );
    }
});

module.exports = app;