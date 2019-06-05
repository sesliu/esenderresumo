const proxy = [{
    context: '/v1.0/esender/',
    target: 'http://esenderweb.zapto.org:8000/v1.0/esender/',
    secure: false,

    changeOrigin: true

}];

module.exports = proxy;