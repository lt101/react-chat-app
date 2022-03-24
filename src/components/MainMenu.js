import React, { useState } from 'react'
import Chat from './Chat'
import Rooms from './Rooms'
import { RoomContext } from '../contexts/RoomContext'

function MainMenu({ user }) {

    
  const [selectedRoom, setselectedRoom] = useState()

  return (
      <div className="d-flex" style={{height: '100vh'}}>
        <RoomContext.Provider value={{ selectedRoom, setselectedRoom }}>
          <Rooms user={user}/>
          <Chat />
        </RoomContext.Provider>

      </div>
  )

}

export default MainMenu