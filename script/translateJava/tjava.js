/**
 * 用来转换java实体类-用于编写contract-不知道能不能用得到
 * 向后台要java实体类文件-->复制到test.java文件
 * 执行:node tjava.js
 * 复制打印内容
 */
const readline = require('readline');
const fs = require('fs');
const fileStream = readline.createInterface({
    input: fs.createReadStream("a.java")
});
let i = 1;
const typeList = {
    'Long': 'number',
    'Integer': 'number',
    'String': 'string',
    'Date': 'string',
    'JSONObject': 'string',
    'Byte': 'string'
}
let desc = '';
let eggData = {}
let tipsList= []; //用来做提示吧
fileStream.on('line', function (line) { //事件监听
    if (line.includes('@ApiModelProperty')) {
        desc = line.slice(line.indexOf("(") + 2, line.length - 2);
    } else if (line.includes('private')) {
        const newLine = line.replace(/^\s+/g,"").split(' ') //去除左侧空格 数组形式
        const eggDataKey  = newLine[2].replace(';', '').trim() //key值 去掉空格
        eggData[eggDataKey] = {} //初始化key对象
        eggData[eggDataKey].desc = desc;
        eggData[eggDataKey].require = true
        let isHasType = false;
        for(let key in typeList){
            if (newLine[1] === key) {
                eggData[eggDataKey].type = typeList[key]
                isHasType = true;
            }
        }
        if(!isHasType){
            if(line.includes('List<')){
                eggData[eggDataKey].type = 'array';

                const listType = newLine[1].replace('List<','').replace('>','');
                tipsList.push(`第${i}行的${listType}对象需要定义`)
                eggData[eggDataKey].itemType =listType;
            }else{
                eggData[eggDataKey].type = newLine[1];
                tipsList.push(`第${i}行的${ newLine[1]}对象需要定义`)
            }
        }
    }
    i += 1;
})

setTimeout(()=>{
    console.log('复制内容:\n',eggData)
    console.log('需要额外定义对象地方:\n',tipsList.join('!!'))
},10)
