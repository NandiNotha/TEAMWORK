const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

require("./routes/tutorial.routes")(app);

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(cors(corsOptions));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
res.json({ message: "Hello, Hi...It's good to see you here!" });
});



// set port, listen for requests
const PORT = process.env.PORT || 9070;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



