const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const initDB     = require("./db").initDB;
const app        = express(); 

initDB( err => {
    if(!err) {
        app.use(cors({ origin: true }))
           .use(bodyParser.json())
           .use(bodyParser.urlencoded({ extended: false }))
           .use('/machines', require('./lib/machine/machineRoute'))
           .use('/seances', require('./lib/seance/seanceRoute'))
           .get('*', (_, res) => res.status(404).json({success: false, data: 'Cible introuvable'}));
    } else {
        throw new Error("Erreur lors de l'initialisation de la base de données : " + err)
    }
});

module.exports = app;