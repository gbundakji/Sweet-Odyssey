
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/', {
    //todo: complete mongodb localhost uri
  //Commented out code bellow in order for the application to work in Heroku, issue happened before but try again without commenting out
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;