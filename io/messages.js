const SEND_MESSAGE = 'sendMessage'

module.exports = socket => {
  socket.on(SEND_MESSAGE, data => {
    console.log(SEND_MESSAGE, data)
  })
}