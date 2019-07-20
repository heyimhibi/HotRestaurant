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
    res.sendFile(path.join(__dirname, "./app/home.html"));
  });


app.get("/app/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/reserve.html"));
  });

app.get("/app/table", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/table.html"));
  });


app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  app.get("/api/waitList", function(req, res) {
    return res.json(waitList);
  });

  //==============================================================
//clear table functionality

// app.delete("/api/clearReservations"), function (req, res) {
//   console.log(res.reservations);
  
  // res.send(res.reservations);
// }
//=================================================================


app.post("/api/newReservation", function(req, res) {
  var newReservation = req.body;

  console.log("old reservations", reservations)

  reservations.push(newReservation);

  console.log("server side reservation", reservations)
  
  res.json(reservations);
});


  // =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });