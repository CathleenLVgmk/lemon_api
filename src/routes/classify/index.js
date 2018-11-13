var sql = require('../mysql/sql');
var query = require('../mysql/query');
var uuid = require('node-uuid');

function addClass(req, res, next) {
    var cid = uuid.v4();
    var c_name = req.query.c_name,
        c_icon = req.query.c_icon,
        c_type = req.query.c_type,
        uid = req.query.uid;
    //cid,c_name,c_icon,c_type,uid
    query(sql.CLASSIFY_ISHAS, [c_name, uid], function(err, results) {
        if (!err) {
            if (results.length) {
                res.json({ code: 2, msg: '该分类已存在' })
            } else {
                add();
            }
        } else {
            res.json({ code: 0, msg: '数据库错误' });
        }
    })

    function add() {
        query(sql.ADD_CLASSIFY, [cid, c_name, c_icon, c_type, uid], function(err, results) {
            if (!err) {
                res.json({ code: 1, msg: '添加分类成功', cid: cid });
            } else {
                res.json({ code: 0, msg: '数据库错误' });
            }
        });
    }
}

module.exports = {
    addClass: addClass
}