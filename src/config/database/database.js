require('dotenv').config();
const mongoose = require('mongoose');


// Database conection to atlas server
mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParcer: true });

// Database instance
const db = mongoose.connection;

// document Schema
const leadSchema = new mongoose.Schema({
  "name": String,
  "email": String,
  "organizacao": String
});

const Lead = mongoose.model('Lead', leadSchema);

// Erro treatment
db.on('error', console.error.bind(console, 'connection error:'));

// When connected
db.once('open', () => {

  const client = new Lead( {
    "name": "name_input",
    "email": "email_input",
    "organizacao": "org_input"
  })

  client.save( (err, client) => {
    if ( err ) {
      console.error(err);
      db.close();
    }

    console.log('added');
    db.close()
  })
})