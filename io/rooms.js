const CREATE_ROOM = 'createRoom'
const CLOSE_ROOM = 'closeRoom'

module.exports = socket => {
  socket.on(CREATE_ROOM, data => {
    console.log(CREATE_ROOM, data)
  })

  socket.on(CLOSE_ROOM, data => {
    console.log(CLOSE_ROOM, data)
  })
}