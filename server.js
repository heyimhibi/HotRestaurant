// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
      customerName: "Table1",
      phoneNumber: "283534342",
      customerEmail: "someguy@gmail.com",
      customerID: "123456"

    }
 
  ];

  var waitList = [
      {
    customerName: "Table2",
    phoneNumber: "333333333",
    customerEmail: "someotherguy@gmail.com",
    customerID: "7891110"

  }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  app.get("/api/waitList", function(req, res) {
    return res.json(waitList);
  });

  
  // =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });