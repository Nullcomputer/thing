const express = require('express');
const server = express();
const PORT = 3000;

const cookie = require('js-cookie');
const sha256 = require('js-sha256');
const sql = require('mysql');


const pug = require("pug");
const path = require('path');
//set-up
server.set('view engine', 'pug');
server.use(express.json()); // JSON

//SQL

var con = sql.createConnection({
    host: 'localhost',
    port: 3000,
    path: 'http://localhost:3000/',
    user: 'root',
    password: '',
    database: 'mysql'
});

con.connect((err) => {
    if(err) throw err;
    console.log('sql->success');
});



// GETS
// index
server.get('/', (req, res) => {
    res.render('index');                    // INDEX
});

// events
server.get('/events', (req, res) => {
    res.render('events.pug');         // CLOSED
});

// shopping
server.get('/shopping', (req, res) => {
    res.render('shopping.pug');         // OPEN
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
    res.render('cart.pug');         // OPEN
});

// settings
server.get('/settings', (req, res) => {
    res.render('settings.pug');         // OPEN
});

// answers
server.get('/answers', (req, res) => {
    res.render('answers.pug');
});

// profile
server.get('/profile', (req, res) => {
    res.render('profile.pug');
});


// API
const r = '/api';

// login
server.post(r + '/login', (req, res) => {
    console.log("ENTERING /login\n")

    const obj = req.body;

    const email = obj.email;
    const password = sha256(obj.password);

    console.log(email);
    console.log(password);
    console.log();

    let exists = false
    const sCheck = `SELECT email FROM user_logins WHERE email = "${email}"`;

    con.query(sCheck, (err, result) => {
        if (!result === null) {
            exists = true;
        }
    });
    res.send(password);
    console.log("EXITING /login\n");
});

// register
server.post(r + '/register', (req, res) => {
    let exists = false;
    const obj = req.body;
    const email = obj.email;
    const password = sha256(obj.password);

    // <sql>

    const json = {
        success: "",
        email: "",
        password: "",
        exists: ""
    };
    
    const sCheck = `SELECT email FROM user_logins WHERE password = "${password}"`;
    
    con.query(sCheck, (err, result) => {
        if (result === null) {
            exists = false;
            console.log("Added")
            const sql = `INSERT INTO user_logins (email, password) VALUES ("${email}", "${password}")`;
            console.log(sql);
            con.query(sql, (err, result) => {
                json.success = err;
                res.json(json);
            });
        } else {
            exists = true;
            console.log("Exists already")
        }
    });
    console.log(sCheck);
});





// Run server
// 404 - NEEDS TO BE LAST ROUTE
server.get('*', (req, res) => {
    res.render('404.pug');
});

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/`);
});