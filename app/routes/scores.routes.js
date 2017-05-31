// Load the module dependencies/*
var scores = require('../../app/controllers/scores.controller');

// Define scores routes module
module.exports = function(app) {
    app.post('/insertRecord', scores.insertRecord);
};