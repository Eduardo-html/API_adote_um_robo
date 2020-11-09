const stockScrape = require('./puppeteer-test_cases/stocks-puppeteer');

const scrapper = require('./puppeteer-test_cases/veja');
const automobScrape = require('./scrapping_files/automobilismo');
const logisticScrape = require('./scrapping_files/logistica');
const oleoGasScrape = require('./scrapping_files/oleo_gas');

exports.veja = (app, rota) => {
  app.get(`/${rota}`, async (req, res) => {
    const response = await scrapper(`${rota}`)
    // Fazer a implementação do recebimento das informações da bolsa
    res.json( { newsList: response } )
  })
}

exports.automobScrape = ( app ) => {
  app.get('/automobilismo' , async ( req ,res ) => {
    const num = Math.round( Math.random() * 2 );
    const response = await automobScrape[num]();
    const stocks = await stockScrape('sectorandindustry-industry/other-transportation')
    res.json( {
      newsList: response,
      stockList: stocks
    })
  })
}

exports.logisticScrape = ( app ) => {
  app.get('/logistica' , async ( req ,res ) => {
    const num = Math.round( Math.random() * 2 );
    const response = await logisticScrape[num]();
    const stocks = await stockScrape('sectorandindustry-sector/distribution-services')
    res.json( {
      newsList: response,
      stockList: stocks
    })
  })
}

exports.oleoGasScrape = ( app ) => {
  app.get('/oleo_gas' , async ( req ,res ) => {
    const num = Math.round( Math.random() * 2 );
    const response = await oleoGasScrape[num]();
    const stocks = await stockScrape('sectorandindustry-industry/oil-gas-production')
    res.json( {
      newsList: response,
      stockList: stocks
    })
  })
}