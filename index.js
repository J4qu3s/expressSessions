const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false}));
app.use(sessions(sessionOptions))

app.get('/viewcount', (req, res) => {
    if(req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`); 
})

app.get('/register', (res, req) => {
    const { username = 'anonymous'} = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`)
})

app.listen(3000, () => {
    console.log("listening on 3000")
})