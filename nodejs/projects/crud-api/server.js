const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://localhost:27017/crud-api', {useNewUrlParser: true});

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {

    Product.create({
        title: "AngularJS",
        description: "Build interactive javascript applications with AngularJS",
        url: 'https://github.com/angular/angular.js/'
    })

    return res.send('Hello Rocketseat!');
})

app.listen(3001);