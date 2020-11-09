const express = require('express');
const app = express();

const veja = require('./src/routes/veja.routes');
const automob = require('./src/routes/automob.routes');
const logistic = require('./src/routes/logistic.routes');
const oleoGas = require('./src/routes/oleo_gas.routes');

veja(app);
automob(app);
logistic(app);
oleoGas(app)

app.listen(8000, () => console.log("Foi!"));