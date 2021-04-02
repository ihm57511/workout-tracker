const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema ({
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

    distance: {
      type: Double,
      trim: true,
      require: "Distance must be specified."
    },
  
    duration: {
      type: Double,
      trim: true,
      required: "Duration must be specified."
    }
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise; 