var express=require('express')
var router=express.Router()
var mysql=require('mysql')
var client=require('./connect.js')(mysql)
router.post('/release',function(req,res){
	client.query('insert into article(title,content) values("'+req.body.title+'","'+req.body.content+'")',function(err,result){
		if(err)throw err;
		res.send('ok')
	})
})
module.exports=router