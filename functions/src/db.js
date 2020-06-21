const firebase = require('firebase');
const assert   = require("assert");
const config   = require('./config.json');

let _db;

function initDB(callback) {
    if (_db) {
        console.warn("Tentative de reconnexion à la base de données !");
        return callback(null, _db);
    }
    firebase.initializeApp(config.firebase)
    _db = firebase.firestore()
    console.log("BDD initilialisée - connecté à : " + config.firebase.databaseURL);
    return callback(null, _db);
}

function getDB() {
    assert.ok(_db, "La base de donnée n'a pas été initialisée. Utilisez initDB en premier.");
    return _db;
}

module.exports = { getDB, initDB };