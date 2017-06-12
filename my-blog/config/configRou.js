const selects=require('../routers/selects.js');
const add=require('../routers/add.js');
const detail=require('../routers/detail.js');
const detailShow=require('../routers/detailShow.js');
const release=require('../routers/release.js');
const view=require('../routers/view.js');
module.exports=function(myapp){
	myapp.get('/',selects)
	myapp.get('/add',add)
	myapp.get('/detail',detail)
	myapp.post('/details',detailShow)
	myapp.post('/modify',view)
	myapp.post('/release',release)
}