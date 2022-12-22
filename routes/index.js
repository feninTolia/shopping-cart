const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', (req, res, next) => {
  const products = Product.find((_err, docs) => {
    res.render('shop/index', { title2: 'Shopping chart', products: docs });
  });
});

router.get('/user/signup', (req, res, next) => {
  res.render('user/signup');
});

router.post('/user/signup', async (req, res, next) => {
  res.send();

  console.log(req.query);
});

module.exports = router;
