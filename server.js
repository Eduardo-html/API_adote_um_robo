const express  = require('express');
const scraper = require('./scraper')
const routesG1 = require('./config/routes/routesG1')
const routesFolha = require('./config/routes/routesFolha')

const app = express();

routesG1(app, scraper)
routesFolha(app, scraper)


app.listen(7070, ()=>console.log('servidor iniciado'))