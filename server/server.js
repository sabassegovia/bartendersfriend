const express = require('express'); // express - to manage servers and routes
require('dotenv').config();
const mongoose = require('mongoose'); // for database
const morgan = require('morgan'); // morgan - logs request, helpful for debugging
const cors = require('cors'); // cors - for communicatinf front-back end
const DB_PORT =  process.env.DB_PORT || 8080;

// app
const app = express();

// db
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology:true,
  useNewUrlParser: true,
})
  .then(() => {
  console.log('DB CONNECTED')
  })
  .catch((err) => {
    console.log('DB CONNECTION ERROR', err);
})

// middleware
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));

// routes
const testRoutes = require('./routes/test');
app.use("/", testRoutes);

// listener
const server = app.listen(DB_PORT, () => {
  console.log(`server is running on DB_port ${DB_PORT}`);
});