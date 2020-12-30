const express = require('express');
const User = require('../core/user');
const router = express.Router();
const db = require('../core/db');
const app = express();
const path = require('path');
const util = require('util');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



const user = new User();

router.get('/', (req, res, next) => {
    let user = req.session.user;
    
    if(user) {
        res.redirect('/home');
        return;
    }
    res.render('index', {title:"My application"});
}) 



router.post('/submit', urlencodedParser, function (req, res) {

        var sql = "INSERT INTO `annonces` (`username`,`telephone`,`type`,`region`,`description`) VALUES ('"+req.body.username + "', '" + req.body.telephone + "', '" + req.body.type + "','" + req.body.region + "','" + req.body.description +"')";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log("table created");
        });
    
    res.redirect('annonces');
});

db.query('SELECT * FROM `annonces` ', function(err, rows, fields) {
    if (err) throw err;
      for (var i = 0; i < rows.length; i++) {
        result = rows; 
      };
  });

  router.get('/user', function(req, res, next) {
    var sql='SELECT * FROM users';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user.ejs', { title: 'User List', userData: data});
  });
});



router.get('/annonces',(req, res, next) => {
    var sql='SELECT * FROM annonces';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('annonces.ejs', { title: 'User List', userData: data});
  });
});

router.get('/Mes-annonces',(req, res, next) => {
    let now = req.session.user.username;
    var sql="SELECT * FROM annonces WHERE username ='" + now + "'";
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('mes.ejs', { title: 'User List', userData: data});
  });
});

router.post('/delete', urlencodedParser, function (req, res) {
    let idm= req.session.id
    var del = "DELETE * FROM 'annonces' WHERE id='" + idm + "'";
        db.query(del, function (err, result) {
            if (err) throw err;
        });
    
    res.redirect('home');
});





router.get('/Profil',(req, res, next) => {
    let me = req.session.user.username;
    var sql="SELECT * FROM users WHERE username ='" + me + "'";
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('Profil.ejs', { title: 'User List', userData: data});
  });
});

router.get('/edit',(req, res, next) => {
 res.render('editphone.pug')
  });




router.post('/edited', urlencodedParser, function (req, res) {
    let del = req.session.user.username;
    var tel = req.body.telephone;  
    var sql = "UPDATE users SET telephone = '" + tel + "' WHERE username ='" + del + "' ";
        db.query(sql, function (err, result) {
            if (err) throw err;
        });
    
    res.redirect('profil');
});



router.get('/new_annonce',(req,res,next)=>{
    res.render('new-annonce.pug')
})

router.get('/classement',(req, res, next) => {
    var sql='SELECT * FROM annonces GROUP BY username ORDER BY COUNT(username) DESC';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('classement.ejs', { title: 'User List', userData: data});
  });
});

router.get('/home', (req, res, next) => {
    let user = req.session.user;

    if(user) {
        res.render('home', {opp:req.session.opp, name:user.fullname});
        return;
    }
    res.redirect('/');
});

router.post('/login', (req, res, next) => {
    user.login(req.body.username, req.body.password, function(result) {
        if(result) {
            req.session.user = result;
            req.session.opp = 1;
            res.redirect('/home');
        }else {
            res.send('Username/Password incorrect!');
        }
    })

});

router.post('/register', (req, res, next) => {
    let userInput = {
        username: req.body.username,
        fullname: req.body.fullname,
        telephone: req.body.telephone,
        password: req.body.password
    };
        user.create(userInput, function(lastId) {
        if(lastId) {
            user.find(lastId, function(result) {
                req.session.user = result;
                req.session.opp = 0;
                res.redirect('/home');
            });

        }else {
            console.log('Error creating a new user ...');
        }
    });

});

router.get('/loggout', (req, res, next) => {
    if(req.session.user) {
        req.session.destroy(function() {
            res.redirect('/');
        });
    }
});

module.exports = router;