const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/about', (req, res, next) => {
  res.render('about', {
    path: '/about'
  });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', {
    path: '/contact'
  });
});

router.get('/quiz', (req, res, next) => {
  res.render('quiz', {
    path: '/quiz'
  });
});

router.post('/quiz', (req, res, next) => {
  res.redirect('/', {
    path: '/'
  });
});

module.exports = router;