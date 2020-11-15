const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

const veja = require('./src/routes/veja.routes');
const automob = require('./src/routes/automob.routes');
const logistic = require('./src/routes/logistic.routes');
const oleoGas = require('./src/routes/oleo_gas.routes');
const financas = require('./src/routes/financeiro.routes');

veja(app);
automob(app);
logistic(app);
oleoGas(app);
financas(app)

app.listen( process.env.PORT || 8000, () => console.log("Connected"));