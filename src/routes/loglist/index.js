var sql = require('../mysql/sql');
var query = require('../mysql/query');
var uuid = require('node-uuid');

function addBill(req, res, next) {
    var parmes = req.body;
    var lid = uuid.v4();
    var uid = parmes.uid,
        cid = parmes.cid,
        create_time = parmes.create_time,
        c_type = parmes.c_type,
        money = parmes.money;
    if (uid && cid && create_time && c_type && money) {
        query(sql.ADD_BILL, [lid, uid, cid, create_time, c_type, money], function(err, results) {
            if (!err) {
                res.json({ code: 1, msg: '添加账单成功', lid: lid });

            } else {
                res.json({ code: 0, msg: '数据库错误' })
            }
        })
    } else {
        res.json({ code: 3, msg: '缺少参数' })
    }
}

function delBill(req, res, next) {
    var lid = req.query.lid;
    query(sql.DEL_BILL, [lid], function(err, results) {
        if (!err) {
            res.json({ code: 1, msg: '删除成功' });
        } else {
            res.json({ code: 0, msg: '数据库错误' });
        }
    })
}

function showBill(req, res, next) {
    var uid = req.query.uid;
    query(sql.SELECT_BILL, [uid], function(err, results) {
        if (!err) {
            if (results.length) {
                res.json({ code: 1, msg: results })
            }
        } else {
            res.json({ code: 0, msg: '数据库错误！' })
        }
    })
}
module.exports = {
    addBill: addBill,
    delBill: delBill,
    showBill: showBill
}