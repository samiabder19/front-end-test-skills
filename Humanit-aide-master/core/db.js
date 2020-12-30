const util = require('util');
const mysql = require('mysql');

const db = mysql.createConnection({
    
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'humanitaide'
});


db.connect(function(err) {
    if(err) throw err
    console.log("Connected");
    });

db.query = util.promisify(db.query);


module.exports = db;