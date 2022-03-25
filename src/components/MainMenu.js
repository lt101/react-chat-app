import React, { useState } from 'react'
import Chat from './Chat'
import Rooms from './Rooms'
import { RoomsContext } from '../contexts/RoomsContext'
import { MessagesContext } from '../contexts/MessagesContext'
import { io } from 'socket.io-client'

function MainMenu({ user }) {

  const socket = io('http://localhost:5000')
    
  const [selectedRoom, setselectedRoom] = useState('')
  const [messages, setMessages] = useState([])

  return (
      <div className="d-flex" style={{height: '100vh'}}>
        <RoomsContext.Provider value={{ selectedRoom, setselectedRoom }}>
          <MessagesContext.Provider value={{ messages, setMessages }}>
            <Rooms socket={socket} user={user}/>
            <Chat />
          </MessagesContext.Provider>

        </RoomsContext.Provider>
      </div>
  )

}

export default MainMenu