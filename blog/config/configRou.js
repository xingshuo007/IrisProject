const selects=require('../routers/selects.js');
const add=require('../routers/add.js');
const detail=require('../routers/detail.js');
const detailShow=require('../routers/detailShow.js');
const release=require('../routers/release.js')
module.exports=function(myapp){
	myapp.get('/',selects)
	myapp.get('/add',add)
	myapp.get('/detail',detail)
	myapp.post('/details',detailShow)
	myapp.post('/release',release)
}