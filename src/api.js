const app = require('./app');

const crypto = require('crypto');

const Jwt = require('./jwt');

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json;' });
    res.end('hello');
})

app.post('/login', (req, res) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        console.log(data, JSON.parse(data));
        let params = JSON.parse(data);
        let name = params.name;
        let password = params.password;
        if (name === 'wrj' && password === '123') {
            let _id = '';
            let jwt = new Jwt(_id);
            let token = jwt.generateToken();
            res.send({ code: 200, msg: 'success', token });
        } else {
            res.send({ code: 400, msg: 'fail', token: null });
        }
    })
})

app.post('/getData', (req, res, next) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        let params = JSON.parse(data);
        let token = params.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        console.log('result -> ',result);
        if (result === 'err') {
            res.send({ code: 403, msg: '登录已过期' });
        } else {
            res.send({code: 200, msg: 'success'});
            // next();
        }
    })
})