import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { RoomsContext } from '../contexts/RoomsContext'

function Rooms({ socket, user }) {

    const COOL_ROOM = "cool room"
    const COZY_ROOM = "cozy room"
    const NICE_ROOM = "nice room"

    const {setselectedRoom} = useContext(RoomsContext)

    function handleSelect(room){
        socket.emit('join-room', room)
    }

    return (
        <div style={{ width: '25%' }} className="d-flex flex-column text-white bg-dark">
            <div className="border border-right overflow-auto">Welcome {user}! Choose a room: </div>
                <ListGroup variant='flush' onSelect={handleSelect}>
                    <ListGroup.Item eventKey={COOL_ROOM}>Cool room</ListGroup.Item>
                    <ListGroup.Item eventKey={COZY_ROOM}>Cozy room</ListGroup.Item>
                    <ListGroup.Item eventKey={NICE_ROOM}>Nice room</ListGroup.Item>
                </ListGroup>
        </div>
    )
    
}

export default Rooms