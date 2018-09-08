/**
 * Created by Administrator on 2018/9/6 0006.
 */
const nunjucks = require('nunjucks')
const path = require('path')

function createEnv(viewsPath, opts) {
    var autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader(viewsPath, {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv(path.join(__dirname, '../views'), {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        },
        first: function (str) {
            return 'sb:' + str.slice(1)
        }
    }
});

module.exports = env;