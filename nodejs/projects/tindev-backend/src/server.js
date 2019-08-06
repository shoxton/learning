const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

const { login, pass, host, db } = require('../config');

mongoose.connect(`mongodb+srv://${login}:${pass}@${host}/${db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);