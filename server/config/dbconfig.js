const mysql = require("mysql");


const config = mysql.createConnection({
    user : "root",
    password: "",
    database:"blog",
    host: "localhost"
});

module.exports = config;