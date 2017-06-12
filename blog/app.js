const express=require('express');
const app=express();
const mysql=require('mysql')
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({'extended':false}))
app.set('views',__dirname+'/views')
app.set('view engine','ejs')
app.use(express.static('static'))
require('./config/configRou')(app)
app.listen(8888,function(){
	console.log('listen 8888..')
})