/**
 * Created by Administrator on 2018/9/4 0004.
 */
const fs = require('fs');
const path = require('path');

function addControllers(router) {
    var currPath = path.resolve(__dirname, '../controllers');
    console.log(currPath,12)
    var files = fs.readdirSync(currPath);
    console.log(files,32)
    var js_files = files.filter(function (file) {
        return file.endsWith('.js');
    })

    console.log(files,33)
    for(var f of js_files){
        console.log(`process controller: ${f}...`);
        let mapping = require(currPath + '\\' + f);
        addMapping(router, mapping);
    }
}

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, async function (ctx, next) {
                console.log(arguments,123456);
                await next()
            }, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

module.exports = function (dir) {
    let controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
};