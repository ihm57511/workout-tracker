const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        require: "Please specify type of exercise."
      },
    
      name: {
        type: String,
        trim: true,
        required: "Name of  is required."
      },
    
      weight: {
        type: Number,  
      },
    
      sets: {
        type: Number,
      },
    
      reps: {
        type: Number,
      },
    
      distance: {
        type: Number,
      },
    
      duration: {
        type: Number,
        required: "Duration must be specified."
      }
    }
  ]
},
{
  toJSON: {virtuals: true}
},
);

ExerciseSchema.virtual('totalDuration').
  get(function() {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration
    }, 0);
  });


const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;



