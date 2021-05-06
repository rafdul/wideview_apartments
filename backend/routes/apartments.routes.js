const express = require('express');
const router = express.Router();
const path = require('path');
const Apartment = require('../models/apartment.model');

router.get('/apartments', async (req, res) => {
  try {
    const result = await Apartment.find();
    if(!result) res.status(404).json({ apartment: 'Not found'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/apartments/:id', async (req, res) => {
  try {
    const result = await Apartment.findById(req.params.id);
    if(!result) res.status(404).json({ apartment: 'Not found'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
