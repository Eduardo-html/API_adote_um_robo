const stockScrape = require('./scrapping_files/stocks-puppeteer');

const scrapper = require('./scrapping_files/veja');
const automobScrape = require('./scrapping_files/automobilismo');
const logisticScrape = require('./scrapping_files/logistica');
const oleoGasScrape = require('./scrapping_files/oleo_gas');

exports.veja = (app, rota) => {
  const stockUri = {
    varejo: 'sectorandindustry-sector/retail-trade',
    saude: 'sectorandindustry-sector/health-services',
    imobiliario: 'sectorandindustry-industry/homebuilding/'
  }

  app.get(`/${rota}`, async (req, res) => {
    const response = await scrapper(`${rota}`)
    const stocks = await stockScrape( stockUri[ rota ] )

    res.json( {
      newsList: response,
      stockList: stocks
    })
  })
}

exports.automobScrape = ( app ) => {
  app.get('/automobilismo' , async ( req ,res ) => {
    const num = Math.round( Math.random() * 2 );
    const response = await automobScrape[num]();
    const stocks = await stockScrape('sectorandindustry-industry/motor-vehicles')
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