/**
 * Created by Administrator on 2018/9/4 0004.
 */
const Koa = require('koa')
const api = require('./middleware/api')
const bodyparser = require('koa-bodyparser')

const app = new Koa();

app.use(bodyparser())
app.use(api())

app.listen(3456);
console.log('listen on port 3456')