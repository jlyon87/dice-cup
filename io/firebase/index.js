const fb = require('firebase/app')
require('firebase/auth')
require('firebase/database')

const creds = process.env.FIREBASE_CREDS || require('./fb-config')

fb.initializeApp(creds)

fb.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user.uid)
  } else {
    console.log('fb user signed out')
  }
})

const db = fb.database()

const signin = () => {
  return fb.auth().signInAnonymously()
    .then(data => {
      console.log('fb user signed in')
      return data
    })
}

const createRoom = newRoom => {
  return db.ref('rooms/').push(newRoom)
}

const monitorRooms = () => {
  return new Promise((resolve, reject) => {
    db.ref('rooms/').on('value', snapshot => {
      if(!snapshot) return reject(new Error('Error retrieving rooms.'))

      console.log('snapshot resolving', snapshot.val())
      resolve(snapshot.val())
    })
  })
}

signin()

module.exports = {
  createRoom,
  monitorRooms
}
