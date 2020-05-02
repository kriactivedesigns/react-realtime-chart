const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
    app.use(createProxyMiddleware('/get_ticket',{
        target: "https://apiv2.bitcoinaverage.com/websocket/v2",
        changeOrigin: true
    }))
}