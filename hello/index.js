
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'dianshang'
});

connection.connect();

// if (connection) { // mysql is started && connected successfully.
//     console.log('Connection Success');
// } else {
//     console.log('Cant connect to db, Check ur db connection');
// }
const sql = 'select * from commoditylist';
connection.query(sql, (err, result) => {
    if (err) {
        console.error('error', err);
        return;
    }
    //console.log('resuit', result);
    const row = result[0];
    const rowArr = Object.values(row);
    console.log("输出", rowArr);


    const jsonObj = JSON.parse(result);
    console.log(jsonObj.id); // 输出： 张三
    console.log(jsonObj.name); // 输出：18


})
connection.end();
// var shang = document.getElementById("age");
// shang.innerHTML = "1111";
// alert("111111111");




