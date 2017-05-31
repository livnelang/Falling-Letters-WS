// Load the module dependencies
var mongoose = require('mongoose');

// Define the Mongoose configuration schemas
module.exports = function() {
    //Connect to MongoDB with Mongoose
    var db = mongoose.connect('mongodb://falling:letters@ds157571.mlab.com:57571/falling_letters');

    db = mongoose.connection;
    //Load the application models
    require('../app/models/scores.model');

    //Return the Mongoose connection instance
    return db;
};