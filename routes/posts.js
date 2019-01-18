const express= require('express');
const router = express.Router();
const mysql = require('mysql');
//const app = express();
// Create database connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});


// Get users
router.get('/:id', (req, res) => {
    let sql = `SELECT * FROM user WHERE id= ${req.params.id} `;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        //res.status(200).json(results);
       res.send(results);
    });
});


module.exports=router;