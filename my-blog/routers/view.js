var express=require('express');
var app=express();
var mysql=require('mysql');
var client=require('./connect.js')(mysql);
var router=express.Router();
router.post('/modify',function(req,res){
	client.query('update article set counter=counter+1 where NO=?',[req.body.NO],function(err,results){
		if(err)throw err;
		res.send('ok')
	})
})
module.exports=router;