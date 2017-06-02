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

    newScore.save(function (error, doc) {
        if(error) {
            res.status(500).json(fetchErrors(error));
        }
        else {
            Scores.find({}).sort({'result': -1
            }).limit(4)
                .exec(function(err, results){
                if(err) {
                    res.json(err.errors);
                }
                else {
                    res.json(results);
                }
            });
        }
    });

    /**
     * fetching the error response with the flase fields and messages
     * @param arr - our error object from the query
     * @returns {{}}
     */
    function fetchErrors(arr) {
        var err_res = {};
        for(var err in arr.errors) {
            err_res[err] = arr.errors[err].message;
        }
        return err_res;
    }
};