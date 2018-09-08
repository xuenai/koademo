/**
 * Created by Administrator on 2018/9/4 0004.
 */
const Koa = require('koa')
const api = require('./middleware/api')
const bodyparser = require('koa-bodyparser')
const nunjucks = require('nunjucks')

const app = new Koa();

/*nunjucks.configure('views', { autoescape: false });
var h = nunjucks.render('index.html', { foo: 'bar' });
console.log(h,5)
nunjucks.configure({ autoescape: false });
var s = nunjucks.renderString('Hello {{ username }}', { username: 'James' });
console.log(s,132)*/

app.use(bodyparser())

app.use(api())

app.listen(3456);
console.log('listen on port 3456')