
const fs = require('fs'); //文件读写
const path = require('path'); //路径配置



(function run(){
    const zz = fs.existsSync(path.join(__dirname,'controller'));
    console.log("zzz=====>",zz)
    delDir(path.join(__dirname,'controller'))
    
})()

