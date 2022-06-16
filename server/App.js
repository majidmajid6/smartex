const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const db = require("./config/dbconfig");


const app = express();


db.connect((err) => {
    if (err) throw err;
});

app.use(cookieParser());

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({}));



app.post("/newscore", (req, res) => {

    let sql =`INSERT INTO profiles (login) VALUE ("${req.body.score}")`;
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


app.listen(3030, () => {
    console.log("listening at http://localhost:3030");
});