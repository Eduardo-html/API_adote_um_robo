const scrapper = require('./scrapping_files/veja');
const automobScrape = require('./scrapping_files/automobilismo');
const logisticScrape = require('./scrapping_files/logistica');
const oleoGasScrape = require('./scrapping_files/oleo_gas');
const scrapeFinancas = require('./scrapping_files/scraper-financas');


exports.automobScrape = ( app ) => {
  app.get('/automobilismo' , async ( req ,res ) => {
    const response = await automobScrape();
    res.json( {
      response,
      site: 'autoesporte.globo.com'
    });
  })
}

exports.logisticScrape = ( app ) => {
  app.get('/logistica' , async ( req ,res ) => {
    const response = await logisticScrape();
    res.json( {
      response,
      site: 'newtrade.com.br'
    });
  })
}

exports.oleoGasScrape = ( app ) => {
  app.get('/oleo_gas' , async ( req ,res ) => {
    const response = await oleoGasScrape();
    res.json( {
      response,
      site: 'petronoticias.com.br'
    });
  })
}

exports.financeiro = (app) => {
  app.get('/financeiro' , async ( req , res ) => {
    const response = await scrapeFinancas();
    res.json( {
      response,
      site: 'investnews.com.br'
    });
  })
}

exports.veja = (app, rota) => {

  app.get(`/${rota}`, async (req, res) => {
    const response = await scrapper(`${rota}`)
    res.json( {
      response,
      site: 'veja.abril.com.br'
    });
  })
}
