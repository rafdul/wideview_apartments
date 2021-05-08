const express = require('express');
const router = express.Router();
const Order = require('../models/order.models');

router.get('/cart', async (req, res) => {
  try {
    const result = await Order
      .find()
      .select('dataOrder firstName status idOrder')
      .sort({ dataOrder: -1});
    if(!result) res.status(404).json({ apartment: 'Not found'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/cart/:id', async (req, res) => {
  try {
    const result = await Order.findById(req.params.id);
    if(!result) res.status(404).json({ order: 'Not found'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/cart', async (req, res) => {
  try {
    const { apartments, dataOrder, firstName, surname, email, phone, status, idOrder} = req.body;
    console.log('req.body', req.body);

    const newOrder = new Order({ apartments, dataOrder, firstName, surname, email, phone, status, idOrder });
    await newOrder.save();
    console.log('newOrder', newOrder);
    res.json(newOrder);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
