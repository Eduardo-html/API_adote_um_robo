const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
