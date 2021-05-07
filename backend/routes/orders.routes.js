const express = require('express');
const router = express.Router();
const path = require('path');
const Order = require('../models/order.models');

router.get('/cart', async (req, res) => {
  try {
    const result = await Order.find().sort({ dataOrder: -1});
    if(!result) res.status(404).json({ apartment: 'Not found'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/cart', async (req, res) => {
  try {
    const { apartments, dataOrder, firstName, surname, email, phone, status} = req.body;
    console.log('req.body', req.body);

    const newOrder = new Order({ apartments, dataOrder, firstName, surname, email, phone, status });
    await newOrder.save();
    console.log('newOrder', newOrder);
    res.json(newOrder);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
