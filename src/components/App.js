import React, { useState} from 'react'
import Login from './Login'
import MainMenu from './MainMenu'
import { io } from 'socket.io-client'



function App() {

  const socket = io('http://localhost:5000', {
    transports: ["websockets", "polling"]
  })

  const [user, setUser] = useState('')
  const [room, setRoom] = useState('')

  function joinRoom() {

  }

  return (
    <>
      {user && room ? <MainMenu user={user} socket={socket} /> : 
      <Login setUser={setUser} setRoom={setRoom}>
      </Login>}
    </>
  )
}

export default App