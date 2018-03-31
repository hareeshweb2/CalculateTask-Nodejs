var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var appRouter = function(app) {
    app.get("/getData", function(req, res) {


        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("values");

            dbo.collection("values").findOne({}, function(err, result) {
                if (err) throw err;
                db.close();
                res.status(200).send(result);
            });
        });


    });


    app.post("/saveData", function(req, res) {


        MongoClient.connect(url, function(err, db) {
            if (err) throw err;

            var dbo = db.db("values");
            var myobj = { "input1": req.body.input1, "input2": req.body.input2 };
            dbo.collection("values").remove(function(err, res) {
                if (err) throw err;
                console.log("deleted");
                db.close();
                // res.status(200).send("record updated");
            });


            dbo.collection("values").insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
                // res.status(200).send("record updated");
            });
        });


    });

}







module.exports = appRouter;