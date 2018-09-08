/**
 * Created by Administrator on 2018/9/4 0004.
 */
const env = require('../middleware/env')

var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

var hello_tmp = async (ctx, next) => {
    await next();
    var s = env.render('hello.html', { name: '594949' });
    ctx.response.body = s;
};

module.exports = {
    'GET /hello/:name': fn_hello,
    'GET /hell': hello_tmp
};