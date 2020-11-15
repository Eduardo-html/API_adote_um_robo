const { NewsList , db } = require('./database');

const dataWrite = require('./dataWrite');
const scrapper = require('../scrapping_files/veja');
const automobScrape = require('../scrapping_files/automobilismo');
const logisticaScrape = require('../scrapping_files/logistica');
const oleoGasScrape = require('../scrapping_files/oleo_gas');
const financasScrape = require('../scrapping_files/scraper-financas');

module.exports = async () => {
  db.collection('newslists') ? await NewsList.deleteMany() : null;

  const scrapperAutomob = await automobScrape();
  await dataWrite( { response: scrapperAutomob , site: 'autoesporte.globo.com' , sector: 'automobilismo' } );

  const scrapperSaude = await scrapper('saude');
  await dataWrite( { response: scrapperSaude , site: 'veja.abril.com.br' , sector: 'saude' } );

  const scrapperVarejo = await scrapper('varejo');
  await dataWrite( { response: scrapperVarejo , site: 'veja.abril.com.br' , sector: 'varejo' } );

  const scrapperImob = await scrapper('imobiliario');
  await dataWrite( { response: scrapperImob , site: 'veja.abril.com.br' , sector: 'imobiliario' } );

  const scrapperEducacao = await scrapper('educacao');
  await dataWrite( { response: scrapperEducacao , site: 'veja.abril.com.br' , sector: 'educacao' } );

  const scrapperLogistica = await logisticaScrape();
  await dataWrite( { response: scrapperLogistica ,  site: 'newtrade.com.br' , sector: 'logistica' } );

  const scrapperOleoGas = await oleoGasScrape();
  await dataWrite( { response: scrapperOleoGas , site: 'petronoticias.com.br' , sector: 'oleo_gas' } );

  const scrapperFinanceiro = await financasScrape();
  await dataWrite( { response: scrapperFinanceiro , site: 'investnews.com.br' , sector: 'financeiro' } );

};