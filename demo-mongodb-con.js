var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://wahid:iset@cluster0-gcsuo.mongodb.net/test?retryWrites=true";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var query = { name: "Morris Park Bake Shop" };
  dbo.collection("clients").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});