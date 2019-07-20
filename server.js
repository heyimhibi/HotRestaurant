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
      phoneNumber: "2835343412452",
      customerEmail: "someguy@gmail.com",
      customerID: "123456956"

    },
    {
      customerName: "Table2",
      phoneNumber: "283534341232",
      customerEmail: "someguy@gmail.com",
      customerID: "12345667562"

    },
    {
      customerName: "Table3",
      phoneNumber: "283534342123",
      customerEmail: "someguy@gmail.com",
      customerID: "12345634579"

    },
    {
      customerName: "Table4",
      phoneNumber: "283534312342",
      customerEmail: "someguy@gmail.com",
      customerID: "123456000"

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

app.put("/api/clearReservations", function (req, res) {
  reservations = [];
  waitlist = [];
  res.json(reservations);
  res.json(waitlist);
});
  //=================================================================


app.post("/api/newReservation", function(req, res) {
  var newReservation = req.body;

  console.log("old reservations", reservations)
  if (reservations.length < 5) {
    reservations.push(newReservation);
  }
  else{
    waitList.push(newReservation);
  }
  

  console.log("server side reservation", reservations)

  res.json(reservations);
});


  // =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });