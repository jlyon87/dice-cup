module.exports = function() {
  const server = require('http').createServer(this.nuxt.renderer.app)
  const io = require('socket.io')(server)
  const fb = require('./firebase')

  this.nuxt.listen = (port, host) => new Promise(resolve => server.listen(port || 3000, host || 'localhost', resolve))
  this.nuxt.hook('close', () => new Promise(resolve => server.close(resolve)))

  this.addVendor('socket.io-client')

  io.on('connection', socket => {
    require('./rooms')(io, socket, fb)
    require('./messages')(io, socket, fb)
  })
}