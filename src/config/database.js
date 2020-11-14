require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect( process.env.DATABASE_URL , { useNewUrlParser: true } );

const db = mongoose.connection;

const newsListSchema = new mongoose.Schema( {
  sector: String,
  newsList: Array
});

const NewsList = mongoose.model( 'NewsList' , newsListSchema );

db.on( 'error' , console.error.bind( console , 'connection error:' ) );

process.on( 'SIGINT' , () => {
  console.log( '\nDatabase connection terminated' );
  process.exit( 0 );
});

module.exports = { NewsList , db };