const mysql = require("mysql2");
const { config } = require("dotenv");

config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

connection.connect( (err) => {
    if (err) {
        console.log("Surgio un error al conectarse" + err);
    } else {
        console.log("Se conectó con exito")
    }
})

module.exports = connection;