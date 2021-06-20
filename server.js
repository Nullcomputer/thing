const express = require('express');
const server = express();
const PORT = 3000;

const pug = require("pug");
const path = require('path');
//set-up
server.set('view engine', 'pug');

// ROUTERS

// index
server.get('/', (req, res) => {
    res.render('index');
});

// login
server.get('/login', (req, res) => {
    res.render('login.pug');
});

// register
server.get('/register', (req, res) => {
    res.render('register.pug');
});

//Run server
server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/`);
});