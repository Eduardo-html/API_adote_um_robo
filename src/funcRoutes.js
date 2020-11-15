const { NewsList } = require('./config/database');


exports.automobScrape = ( app ) => {
  app.get('/automobilismo' , async ( req ,res ) => {
    const response = await NewsList.find({ sector: 'automobilismo' });
    res.send( response );
  })
}

exports.logisticScrape = ( app ) => {
  app.get('/logistica' , async ( req ,res ) => {
    const response = await NewsList.find({ sector: 'logistica' });
    res.send( response );
  })
}

exports.oleoGasScrape = ( app ) => {
  app.get('/oleo_gas' , async ( req ,res ) => {
    const response = await NewsList.find({ sector: 'oleo_gas' });
    res.send( response );
  })
}

exports.financeiro = (app) => {
  app.get('/financeiro' , async ( req , res ) => {
    const response = await NewsList.find({ sector: 'financeiro' });
    res.send( response );
  })
}

exports.veja = (app, rota) => {
  app.get(`/${rota}`, async (req, res) => {
    const response = await NewsList.find({ sector: `${rota}` });
    res.send( response );
  })
}