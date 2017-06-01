/*
 * Load Dependencies
 */
//Scores model
var Scores = require('mongoose').model('Score');


/*
 * /insertRecord
 * Insert a new record to the collection,
 * and respond with the top 3 highlights scores
 */
exports.insertRecord = function (req,res)  {
    res.set("Content-Type", "application/json");

    // new record from the req.body parts
    var newScore = new Scores(req.body);

    newScore.save(function (err,doc) {
        if(err) {
            res.json(err.errors.result.message);
        }
        else {
            Scores.find({}).sort({'result': -1
            }).limit(4)
                .exec(function(err, results){
                if(err) {
                    res.json(err.errors.result.message);
                }
                else {
                    res.json(results);
                }
            });
        }
    });
};