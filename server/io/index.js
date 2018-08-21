const express = require('express')
// Create express instnace
const app = express()
const server = require('http').Server(app)
const fb = require('../firebase')
// Require API routes
// const users = require('./routes/users')

// Import API Routes
// app.use(users)
const io = require('socket.io')(server)

io.on('connection', socket => {
  require('./rooms')(io, socket, fb)
  require('./messages')(io, socket, fb)
})
// Export the server middleware
module.exports = {
  path: '/socket.io',
  handler: app
}
