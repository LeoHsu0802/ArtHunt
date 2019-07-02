const mysql = require('mysql');
const express = require('express');
var cors = require('cors');
const app = express();
const bodyparser = require('body-parser');
//全域開放，避免CORS跨域阻擋
app.use(cors());
app.use(bodyparser.json());
// creat connection
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '830802',
  database : 'art' 
});

//connect
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('MySQL Connected...')
});

// check running enviroment
const port = process.env.PORT || 3000;

// create
app.listen(port);
// only print hint link for local enviroment 
if(port === 3000){
  console.log('RUN http://localhost:3000/')
}

app.get('/arts',(req,res)=>{
  db.query('SELECT * FROM art_item',(err,rows,fields)=>{
    if(!err){
    console.log(rows);
    res.send(rows);
    }
    else
    console.log(err);
  })
});

module.exports = app;