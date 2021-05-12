const express = require('express');
const router = express.Router();
const Order = require('../models/order.models');

router.get('/cart', async (req, res) => {
  try {
    const result = await Order
      .find()
      .select('dataOrder statusSubmited firstName')
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
    console.log('req.body', req.body);

    const bodyOnlyApartments = req.body.map(item => item.apartments);
    // console.log('bodyOnlyApartments', bodyOnlyApartments);

    const bodyOnlyDataSubmit= req.body.map(item => item.dataSubmit);

    const newOrder = new Order({
      apartments: bodyOnlyApartments,
      firstName: bodyOnlyDataSubmit[0].firstName,
      surname: bodyOnlyDataSubmit[0].surname,
      email: bodyOnlyDataSubmit[0].email,
      phone: bodyOnlyDataSubmit[0].phone,
      statusSubmited: bodyOnlyDataSubmit[0].statusSubmited,
      idSubmited: bodyOnlyDataSubmit[0].idSubmited,
      dataSubmited : bodyOnlyDataSubmit[0].dataSubmited,
    });
    await newOrder.save();
    console.log('newOrder', newOrder);
    res.json(newOrder);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
