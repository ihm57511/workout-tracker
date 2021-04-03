const express = require('express');
const logger = require('morgan');
const mongoose = require ('mongoose');

const apiRoutes = require('./routes/apiRoutes');
const homeRoutes = require('./routes/homeRoutes');

const PORT = process.env.PORT || 3000;

const db = require('./models');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({estended: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(apiRoutes);
app.use(homeRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

