const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = exprss();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'login'
})

app.listen(5173, () => console.log('server started'))