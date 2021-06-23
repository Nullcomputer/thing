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

server.get('/events', (req, res) => {
    res.render('construction.pug');
});

server.get('/cake-type', (req, res) => {
    res.render('construction.pug');
});

server.get('/shopping', (req, res) => {
    res.render('construction.pug');
});

// login
server.get('/login', (req, res) => {
    res.render('login.pug');
});

// register
server.get('/register', (req, res) => {
    res.render('register.pug');
});

server.get('/cart', (req, res) => {
    res.render('construction.pug');
});

server.get('/settings', (req, res) => {
    res.render('settings.pug');
});

//Run server
server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/`);
});