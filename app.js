const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

app.get('/', (req, res, next) => {
  res.render('home', {
    path: '/'
  });
});

app.listen(4000);
