const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("./src/config/database");

app.use(express.static("public"));

app.use(cors());

const veja = require("./src/routes/veja.routes");
const automob = require("./src/routes/automob.routes");
const logistic = require("./src/routes/logistic.routes");
const oleoGas = require("./src/routes/oleo_gas.routes");

veja(app);
automob(app);
logistic(app);
oleoGas(app);

const kittySchema = new mongoose.Schema(
  {
    name: String,
  },
  { collection: "scrapper" }
);

const Kitten = mongoose.model("Kitten", kittySchema);

app.get("/teste", (req, res) => {
  Kitten.create({ name: "inserting " + Date.now() }, function (err, doc) {
    if (err) res.send(err);
    res.send(doc);
  });
});

app.listen(process.env.PORT || 8000, () => console.log("Connected"));
