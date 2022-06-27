const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({}));



app.get("/:code", async (req, res) => {

    console.log("entrer dans api")
    const data = await fetch(`https://uk.api.just-eat.io/restaurants/bypostcode/${req.params.code}`)
    const restaurent = await data.json();

    if (restaurent){
        res.send(restaurent.MetaData);
    }
     
        
});


app.listen(3030, () => {
    console.log("listening at http://localhost:3030");
});