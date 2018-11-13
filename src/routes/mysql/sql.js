module.exports = {
    //添加用户
    ADD_USER: 'insert into userlist(uid,nike_name) values(?,?)',
    //查询用户名是否存在
    USER_ISHAS: 'select * from userlist where nike_name=?',
    //自定义添加分类
    ADD_CLASSIFY: 'insert into classify(cid,c_name,c_icon,c_type,uid) values(?,?,?,?,?)',
    //查询分类是否存在
    CLASSIFY_ISHAS: 'select * from classify where c_name=? and (uid=? or uid="*")',
    //添加账单 lid uid cid create_time c_type money
    ADD_BILL: 'insert into loglist(lid,uid,cid,create_time,c_type,money) values(?,?,?,?,?,?)',
    //删除账单
    DEL_BILL: 'delete from loglist where lid=?',
    //查找所有账单
    SELECT_BILL: 'select l.*,c.c_icon,c.c_name,c.c_type from loglist l,classify c,userlist u where l.uid=? and l.uid=c.uid and l.uid=u.uid'


}