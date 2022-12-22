const dotenv = require('dotenv');
dotenv.config();
const { DB_HOST } = process.env;

const Product = require('../models/product');
const mongoose = require('mongoose');

const products = [
  new Product({
    imagePath: './images/conta-hero.jpg',
    title: 'Conta',
    description: 'Contacts book service subscription',
    price: 5.66,
  }),

  new Product({
    imagePath: './images/conta-hero.jpg',
    title: 'Spotify',
    description: 'Spotify service subscription',
    price: 2.66,
  }),

  new Product({
    imagePath: './images/conta-hero.jpg',
    title: 'netflix',
    description: 'netflix service subscription',
    price: 3.66,
  }),

  new Product({
    imagePath: './images/conta-hero.jpg',
    title: 'apple music',
    description: 'apple music service subscription',
    price: 4.66,
  }),

  new Product({
    imagePath: './images/conta-hero.jpg',
    title: 'vimeo',
    description: 'vimeo service subscription',
    price: 6.66,
  }),

  new Product({
    imagePath: './images/conta-hero.jpg',
    title: 'twitter',
    description: 'twitter service subscription',
    price: 7.66,
  }),
];

let done = 0;

mongoose.connect(DB_HOST);

for (let index = 0; index < products.length; index++) {
  const element = products[index];
  element.save((_err, result) => {
    done++;
    if (done === products.length) {
      mongoose.disconnect();
    }
  });
}
