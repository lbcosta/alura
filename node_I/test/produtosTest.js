const http = require('http');
const assert = require('assert');
describe('#ProdutosController', () => {
    it('#listagem json',(done) => {
        const config = {
            hostname: 'localhost',
            port:3000,
            path:'/produtos',
            headers: {
                'Accept':'application/json'
            }
        };

        http.get(config, (res) => {
            assert.equal(res.statusCode,200);
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
            done();
        });

        
    });
});