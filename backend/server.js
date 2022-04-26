const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const bp = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo DB Connected.");
});

const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server Listening at: ${port}`);
});