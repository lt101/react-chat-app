import React from 'react'
import Chat from './Chat'
import Rooms from './Rooms'


function MainMenu({ user, room }) {

  return (
      <div className="d-flex" style={{height: '100vh'}}>
            <Rooms user={user} room={room}/>
            <Chat room={room}/>
      </div>
  )

}

export default MainMenu