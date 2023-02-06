const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  
    breed: {
      type: String,
      required: true,
      select: false,
    },
  });
  
  module.exports = mongoose.model('dog', dogSchema);