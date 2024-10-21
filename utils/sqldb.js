import mysql from 'mysql2/promise'

let pool;

if (!pool) {
    pool = mysql.createPool({
        host: process.env.SQL_HOST,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE
    })
    console.log("connecting to db")

}


export default pool