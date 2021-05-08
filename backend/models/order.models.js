const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  apartments: { type: Array },
  dataOrder: { type: String },
  firstName: { type: String  },
  surname: { type: String  },
  email: { type: String },
  phone: { type: String },
  status: { type: String },
  idOrder: { type: String },
});

module.exports = mongoose.model('Order', postSchema);