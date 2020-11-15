const { NewsList } = require( './database' );


module.exports = async ( { response , site , sector } ) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const d = new Date();

  const teste = new NewsList( {
    sector,
    site,
    date: d.toLocaleDateString('pt-br',options),
    newsList: response
  });

  teste.save( err => {
    if (err) {
      return console.error( err );
    }
  })
}