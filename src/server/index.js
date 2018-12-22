const express = require('express');
const movies = require('../movies');

// SERVER SET UP
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './src/views');
app.use(express.static('./src/public'));

app.get('/', async (req, res) => {
  res.render('index', { movies });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
