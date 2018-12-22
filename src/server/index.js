const express = require('express');

// SERVER SET UP
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './src/views');
app.use(express.static('./src/public'));

app.get('/', async (req, res) => {
  res.render('index');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
