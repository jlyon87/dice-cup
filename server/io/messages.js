const SEND_MESSAGE = 'sendMessage'

module.exports = (io, socket, fb) => {
  socket.on(SEND_MESSAGE, data => {
    console.log(SEND_MESSAGE, data)
  })
}
