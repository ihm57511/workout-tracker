const router = require('express').Router();

const db = require('../models');

router.get('/api/workouts', (req, res) => {
  db.Workout.aggregate([
    {$addFields: {totalDuration: { $sum: '$exercises.duration' },},}, 
    {$sort: { date: -1 }}
  ])
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err)
    });
});

router.put('/api/workouts/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id,
    { $push: { exercises: req.body } })
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err)
    });
});

router.post('/api/workouts', (req, res) => {
  db.Workout.create({})
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err)
    });
});

router.get('/api/workouts/range', (req, res) => {
  db.Workout.aggregate([
      {$limit: 7},
      {$sort: {day: -1}},
      {$addFields: {totalDuration: { $sum: '$exercises.duration' }}}
    ])
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err)
    });
});

module.exports = router;



