const fbModel = require('./firebase/fb-model')

const CREATE_ROOM = 'createRoom'
const CLOSE_ROOM = 'closeRoom'
const GET_ROOMS = 'getRooms'

module.exports = (io, socket, fb) => {
  socket.on(CREATE_ROOM, data => {
    console.log(CREATE_ROOM, data)
    io.emit(CREATE_ROOM, data)
  })

  socket.on(CLOSE_ROOM, data => {
    console.log(CLOSE_ROOM, data)
  })

  socket.on(GET_ROOMS, data => {
    console.log('getting rooms')
    fb.monitorRooms()
      .then(fbModel.roomModel)
      .then(data => {
        console.log('got rooms', data)
        io.emit(GET_ROOMS, data)
      })
      .catch(err => {
        console.error('error getting rooms', err)
      })
  })
}
