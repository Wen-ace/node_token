const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const MINS = 30;
class Jwt {
    constructor(data) {
        this.data = data;
    }

    generateToken() {
        let data = this.data;
        let created = Math.floor(Date.now() / 1000);
        let cert = fs.readFileSync(path.join(__dirname, '../key/private.key')); // 私钥
       
        let token = jwt.sign({
            data,
            exp: created + 60 * MINS,
        }, cert, { algorithm: 'RS256' });
        return token;
    }
    // 校验token
    verifyToken() {
        let token = this.data;
        let cert = fs.readFileSync(path.join(__dirname, '../key/public.key')); // 公钥
    
        let res;
        try {
            let result = jwt.verify(token, cert, { algorithms: ['RS256'] }) || {};
            let { exp = 0 } = result;
            let current = Math.floor(Date.now() / 1000);
            if (current <= exp) {
                res = result.data || {};
            }
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}

module.exports = Jwt;