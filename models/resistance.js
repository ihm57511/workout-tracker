const { Double } = require('bson');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  name: {
  type: String,
  trim: false,
  required: "Name of excorsixe is required."
  },

  weight: {
    type: Double,
    trim: true,
    required: "Weight must be specified."
  },

  sets: {
    type: Double,
    trim: true,
    required: "Number of sets must be sepcified."
  },

  reps: {
    type: Double,
    trim: true,
    required: "Number of reps must be specified."
  },

  duration: {
    type: Double,
    trim: true,
    required: "Duration must be specified."
  }
});

const Resistance = mongoose.model('Resistance', ResistanceSchema);

module.exports = Resistance;