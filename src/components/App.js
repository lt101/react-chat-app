import React, { useState } from 'react'
import Login from './Login'
import MainMenu from './MainMenu'
import { SocketProvider } from '../contexts/SocketContext'

function App() {
  
  const [user, setUser] = useState('')
  const [room, setRoom] = useState('')

  return (
    <SocketProvider>
      {user && room ? <MainMenu user={user} room={room} /> : 
      <Login setUser={setUser} setRoom={setRoom}>
      </Login>}
    </SocketProvider>
  )
}

export default App