//const stockScrape = require('./scrapping_files/stocks-puppeteer');

const scrapper = require("./scrapping_files/veja");
const automobScrape = require("./scrapping_files/automobilismo");
const logisticScrape = require("./scrapping_files/logistica");
const oleoGasScrape = require("./scrapping_files/oleo_gas");

exports.automobScrape = app => {
  app.get("/automobilismo", async (req, res) => {
    const response = await automobScrape();
    res.send(response);
  });
};

exports.logisticScrape = app => {
  app.get("/logistica", async (req, res) => {
    const response = await logisticScrape();
    res.json(response);
  });
};

exports.oleoGasScrape = app => {
  app.get("/oleo_gas", async (req, res) => {
    const response = await oleoGasScrape();
    res.send(response);
  });
};

exports.teste = app => {
  app.get("/teste", async (req, res) => {
    res.send("testando");
  });
};

exports.veja = (app, rota) => {
  app.get(`/${rota}`, async (req, res) => {
    const response = await scrapper(`${rota}`);

    res.send(response);
  });
};
