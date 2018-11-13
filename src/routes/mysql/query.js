var mysql = require('mysql');
var pool = mysql.createPool({
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'lemon',
    connectionLimit: 100
})

function query(sql, arr, ck) {
    pool.getConnection(function(err, con) {
        if (err) {
            ck && ck(err);
        } else {
            con.query(sql, arr, function(err, result) {
                if (err) {
                    ck && ck(err);
                } else {
                    ck && ck(null, result);
                }
            })
            con.release();
        }
    })
}
module.exports = query;