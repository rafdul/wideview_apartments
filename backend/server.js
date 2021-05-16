const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const apartmentsRoutes = require('./routes/apartments.routes');
const ordersRoutes = require('./routes/orders.routes');
const categoriesRoutes = require('./routes/categories.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', apartmentsRoutes);
app.use('/api', ordersRoutes);
app.use('/api', categoriesRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ apartment: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
// console.log('app get env:', app.get('env'));
// const dbURI = (app.get('env') === 'production')
//   ? `mongodb+srv://${process.env.userApp}:${process.env.mongoApp}@cluster0.67klc.mongodb.net/videwievDB?retryWrites=true&w=majority`
//   : 'mongodb://localhost:27017/videwievDB';
const dbURI = `mongodb+srv://${process.env.userApp}:${process.env.mongoApp}@cluster0.67klc.mongodb.net/videwievDB?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});
