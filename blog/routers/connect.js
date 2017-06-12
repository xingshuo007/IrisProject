var mysql=require('mysql');
module.exports=function(mysql){
	var client=mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'520025',
		database:'1502c'
	})
	client.connect();
	return client
}