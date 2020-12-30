const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const path = require('path');
const pageRouter = require('./routes/pages');
const app = express();

// for body parser. to collect data that sent from the client.
app.use(express.urlencoded( { extended : false}));


// Serve static files. CSS, Images, JS files ... etc
app.use(express.static(path.join(__dirname, 'public')));


// Template engine. PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// session
app.use(session({
    secret:'humanit_aide',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}));


// Routers
app.use('/', pageRouter);


// Errors => page not found 404
app.use((req, res, next) =>  {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
})

// Handling errors (send them to the client)
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});





var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/submit',function(req,res) {
    res.render('index');
});





// Setting up the server
app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});



module.exports = app;