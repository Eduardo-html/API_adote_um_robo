const { NewsList , db } = require('./database');

const dataWrite = require('./dataWrite');
const scrapper = require('../scrapping_files/veja');
const automobScrape = require('../scrapping_files/automobilismo');
const logisticaScrape = require('../scrapping_files/logistica');
const oleoGasScrape = require('../scrapping_files/oleo_gas');
const financasScrape = require('../scrapping_files/scraper-financas');

module.exports = async () => {
  const scrapperAutomob = await automobScrape();
  const scrapperSaude = await scrapper('saude');
  const scrapperVarejo = await scrapper('varejo');
  const scrapperImob = await scrapper('imobiliario');
  const scrapperEducacao = await scrapper('educacao');
  const scrapperLogistica = await logisticaScrape();
  const scrapperOleoGas = await oleoGasScrape();
  const scrapperFinanceiro = await financasScrape();
  
  await dataWrite( { response: scrapperAutomob , site: 'autoesporte.globo.com' , sector: 'automobilismo' } );
  await dataWrite( { response: scrapperSaude , site: 'veja.abril.com.br' , sector: 'saude' } );
  await dataWrite( { response: scrapperVarejo , site: 'veja.abril.com.br' , sector: 'varejo' } );
  await dataWrite( { response: scrapperImob , site: 'veja.abril.com.br' , sector: 'imobiliario' } );
  await dataWrite( { response: scrapperEducacao , site: 'veja.abril.com.br' , sector: 'educacao' } );
  await dataWrite( { response: scrapperLogistica ,  site: 'newtrade.com.br' , sector: 'logistica' } );
  await dataWrite( { response: scrapperOleoGas , site: 'petronoticias.com.br' , sector: 'oleo_gas' } );
  await dataWrite( { response: scrapperFinanceiro , site: 'investnews.com.br' , sector: 'financeiro' } );
};