import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useSocket } from '../contexts/SocketContext'

function Rooms({ user, room }) {

    const [userList, setUserList] = useState([])

    const socket = useSocket()

    useEffect(() => {
        socket.on('update-rooms', usersOfRoom => {
            setUserList(usersOfRoom)
        })
    }, [socket])

    return (
        <div style={{ width: '25%' }} className="d-flex flex-column text-black text-white">
            <div className="border border-right overflow-auto bg-secondary">Welcome {user}! Your are in room {room} </div>
                <ListGroup>
                    <div className="text-black">Active Users:</div>
                    {userList.map((userName, index) => {
                        return (
                        <ListGroup.Item key={index}>
                            {userName}
                        </ListGroup.Item>  
                        )
                    })}
                </ListGroup>
        </div>
    )
    
}

export default Rooms