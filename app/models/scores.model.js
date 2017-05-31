//Load the module dependencies
var mongoose = require('mongoose'), Schema = mongoose.Schema;

// Define a new 'scoreSchema'
var scoreSchema = new Schema({
    name: {type: String, required : true},
    result: {type: Number, required : true}
},{collection: 'scores'});

// Create the 'score' model out of the 'scoreSchema'
mongoose.model('Score',scoreSchema);