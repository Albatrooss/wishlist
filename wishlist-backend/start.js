const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// connect to database!
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`MONGODB ERROR → ${err.message}`);
});

// Get models
require('./models/User');

// start our app!
const app = require('./app');
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Express running - PORT ${port}`);
})