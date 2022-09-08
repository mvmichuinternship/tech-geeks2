const express = require('express');
const bodyParser= require('body-parser')
const cors = require('cors');
const mysql = require("mysql");
const app = express();

const db= mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"callback",
    
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


app.post('/callback', (req, res) => {
    console.log("app post at server:")
      const {name, number, query} = req.body;
    //    console.log("app post at server:"+familySetup);
  
      db.query("INSERT INTO callback (name, number, query) VALUES (?,?,?);"
      , [name, number, query], 
      (err, result)=>{
        if(err){
        console.log(err);
        }
        else
        console.log("success")
      })
   
  });


  app.post('/admission', (req, res) => {
    console.log("app post at server:")
      const {name, email, number, state, city, course} = req.body;
    //    console.log("app post at server:"+familySetup);
  
      db.query("INSERT INTO admission (name, email, number, state, city, course) VALUES (?,?,?,?,?,?);"
      , [name, email, number, state, city, course], 
      (err, result)=>{
        if(err){
        console.log(err);
        }
        else
        console.log("success")
      })
   
  });


  const port = 5000;

app.listen(5000, () => `Server running on port 5000`);