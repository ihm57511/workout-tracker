const { Double } = require('bson');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    require: "Type of cardio must be specified."
  },

  distance: {
    type: Double,
    trim: true,
    require: "Distance must be specified."
  },

  duration: {
    type: Double,
    trim: true,
    require: "Duration must be specified."
  }
});

const Cardio = mongoose.model('Cardio', CardioSchema);

module.exports = Cardio;