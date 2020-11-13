//const stockScrape = require('./scrapping_files/stocks-puppeteer');

const scrapper = require('./scrapping_files/veja');
const automobScrape = require('./scrapping_files/automobilismo');
const logisticScrape = require('./scrapping_files/logistica');
const oleoGasScrape = require('./scrapping_files/oleo_gas');

exports.automobScrape = ( app ) => {
  app.get('/automobilismo' , async ( req ,res ) => {
    const num = Math.round( Math.random() * 2 );
    const response = await automobScrape[num]();
    res.send( response )
  })
}

exports.logisticScrape = ( app ) => {
  app.get('/logistica' , async ( req ,res ) => {
    const num = Math.round( Math.random() * 2 );
    const response = await logisticScrape[num]();
    res.json( response )
  })
}

exports.oleoGasScrape = ( app ) => {
  app.get('/oleo_gas' , async ( req ,res ) => {
    const num = Math.round( Math.random() * 2 );
    const response = await oleoGasScrape[num]();
    res.send( response )
  })
}

exports.veja = (app, rota) => {

  app.get(`/${rota}`, async (req, res) => {
    const response = await scrapper(`${rota}`)

    res.send( response )
  })
}
