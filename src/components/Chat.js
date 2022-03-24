import React, { useContext } from 'react'
import { Tab } from 'react-bootstrap'
import { RoomContext } from '../contexts/RoomContext'

function Chat() {

    const {selectedRoom} = useContext(RoomContext)

    return (
        <div style={{ width: '75%' }} className="d-flex flex-column">
            <Tab.Container>
                <div>Showing chat from {selectedRoom}</div>
                <Tab.Content className="border border-right overflow-auto flex-grow-1">
                </Tab.Content>
            </Tab.Container>
        </div>
    )
    
}

export default Chat