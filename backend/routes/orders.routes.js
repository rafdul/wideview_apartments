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
    // const {apartments} = req.body.apartments;
    const { firstName, surname, email, phone, statusSubmited, idSubmited, dataSubmited } = req.body.dataSubmit;
    console.log('apartments', req.body.apartments);
    console.log('req.body.dataSubmit', req.body.dataSubmit);


    // const bodyOnlyApartments = req.body.map(item => item.apartments);
    // console.log('bodyOnlyApartments', bodyOnlyApartments);

    // const bodyOnlyDataSubmit= req.body.map(item => item.dataSubmit);
    // console.log('bodyOnlyDataSubmit', bodyOnlyDataSubmit);

    // const newOrder = new Order({
    //   apartments: bodyOnlyApartments,
    //   firstName: bodyOnlyDataSubmit.firstName,
    //   surname: bodyOnlyDataSubmit.surname,
    //   email: bodyOnlyDataSubmit.email,
    //   phone: bodyOnlyDataSubmit.phone,
    //   statusSubmited: bodyOnlyDataSubmit.statusSubmited,
    //   idSubmited: bodyOnlyDataSubmit.idSubmited,
    //   dataSubmited : bodyOnlyDataSubmit.dataSubmited,
    // });

    const newOrder = new Order({
      apartments: req.body.apartments,
      firstName, surname, email, phone, statusSubmited, idSubmited, dataSubmited,
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
