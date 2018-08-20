const roomModel = data => {
  const rooms = []
  for (const id in data) {
    const room = data[id]
    room.id = id
    rooms.push(room)
  }
  return rooms
}

module.exports = {
  roomModel
}
