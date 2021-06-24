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
    res.render('index');                    // DEFAULT
});

// events
server.get('/events', (req, res) => {
    res.render('construction.pug');         // CLOSED
});

// cake-type
server.get('/cake-type', (req, res) => {
    res.render('construction.pug');         // CLOSED
});

// shopping
server.get('/shopping', (req, res) => {
    res.render('construction.pug');         // CLOSED
});

// login
server.get('/login', (req, res) => {
    res.render('login.pug');                // OPEN
});

// register
server.get('/register', (req, res) => {
    res.render('register.pug');             // OPEN
});

// cart
server.get('/cart', (req, res) => {
    res.render('construction.pug');         // CLOSED
});

// settings
server.get('/settings', (req, res) => {
    res.render('settings.pug');             // OPEN
});

//Run server
server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/`);
});