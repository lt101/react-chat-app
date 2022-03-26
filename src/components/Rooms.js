import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Rooms({ user, room }) {

    const COOL_ROOM = "cool room"
    const COZY_ROOM = "cozy room"
    const NICE_ROOM = "nice room"

    return (
        <div style={{ width: '25%' }} className="d-flex flex-column text-white bg-dark">
            <div className="border border-right overflow-auto">Welcome {user}! Your are in room {room} </div>
                <ListGroup variant='flush'>
                    <ListGroup.Item eventKey={COOL_ROOM}>Cool room</ListGroup.Item>
                    <ListGroup.Item eventKey={COZY_ROOM}>Cozy room</ListGroup.Item>
                    <ListGroup.Item eventKey={NICE_ROOM}>Nice room</ListGroup.Item>
                </ListGroup>
        </div>
    )
    
}

export default Rooms