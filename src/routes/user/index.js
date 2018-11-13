var sql = require('../mysql/sql');
var query = require('../mysql/query');
var uuid = require('node-uuid');

function adduser(req, res, next) {
    var uid = uuid.v4();
    var nike_name = req.body.nike_name;
    query(sql.USER_ISHAS, [nike_name], function(err, results) {
        if (!err) {
            if (results.length) {
                res.json({ code: 2, msg: '该昵称已存在' });
            } else {
                add();
            }
        } else {
            res.json({ code: 0, msg: '数据库错误' })
        }
    })

    function add() {
        query(sql.ADD_USER, [uid, nike_name], function(err, results) {
            if (!err) {
                res.json({ code: 1, msg: '添加成功', uid: uid })
            } else {
                res.json({ code: 0, msg: '数据库错误' })
            }
        })
    }
}
module.exports = {
    adduser: adduser
}