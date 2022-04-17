const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const db = require("./config/dbconfig");
const bcrypt = require("bcrypt");


const app = express();



//connect to our database
db.connect((err) => {
    if (err) throw err;
});

//---------------------------/Middleware:
//to use CP
app.use(cookieParser());

//this is to allow our api for cross origine resource sharing
app.use(cors());

//this is to allow our api for parsing json
app.use(express.json());

//this is to allow our api to recieve data from a client app
app.use(express.urlencoded({}));


// Ajouter Un Nouveau Utilisateur

app.post("/newprofile", (req, res) => {

    console.log(req.body.id);
    let sql =`INSERT INTO profiles (login, gitid, node_id, created_at) VALUE ("${req.body.login}", "${req.body.id}", "${req.body.node_id}", "${req.body.created_at}")`;
    db.query(sql, (err, results) => {
        if(err) {
            
            console.log("insert error");
            res.send(err)
        }
        else {
            res.send({ error: false, data: results, message: 'user has been updated successfully.' });
        }

    });   
});


app.get("/getprofiles", (req, res) => {
    let sql = "SELECT * FROM profiles";
    db.query(sql, (err, result) => {
        if (err){
            res.status(400).send(err);
            return;
        }
        const data = JSON.stringify(result);
        res.send({result});
    });
});




app.listen(3030, () => {
    console.log("listening at http://localhost:3030/");
});