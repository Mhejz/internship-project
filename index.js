const express = require('express');
const mysql = require("mysql");

const app = express();

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database:"mywordpress_db"
// });

app.get("/", (req, res) => {

    res.send("This is api");
});

// app.get("/wp_users", (req, res) => {

//     const sql = "SELECT * FROM wp_users";
//     db.query(sql,(err, result) => {
//         if (err) throw err;
//         res.send(result);
//     })
// });

app.listen(5000, () => console.log("server started"));
