const express = require('express');
const cors = require('cors');
const dbScrapping = require('./src/config/scrapperDataAdd');
const { NewsList } = require('./src/config/database');

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

setInterval( async () => {
  await NewsList.deleteMany();
  await dbScrapping()
} , 1_800_000);

app.listen( process.env.PORT || 8000, () => console.log("Connected"));