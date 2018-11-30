const express = require('express');
const getMovies = require('../movies/index');

// SERVER SET UP
const app = express();
const port = 3000;

// DOTENV
require('dotenv').config();

app.get('/', async (req, res) => {
  const movies = await getMovies();
  console.log(movies);
  res.send('Hello World!');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
