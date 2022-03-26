import React, { useState, useEffect } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useSocket } from '../contexts/SocketContext'

function Chat({ room }) {

    const [text, setText] = useState('')
    const socket = useSocket()

    async function handleSubmit(e) {
        e.preventDefault()

        if(text !== '') {
            const messageInfo = {
                text : text,
                room: room,
                time: new Date(Date.now()).getHours() + new Date(Date.now()).getMinutes()
            }
            await socket.emit('send-message', messageInfo)
        }
        setText('')
    }

    useEffect(() => {
        socket.on('receive-message', message => {
            console.log(`received something: ${JSON.stringify(message)}`)
        })
    }, [socket])

    return (
        <div style={{ width: '75%' }} className="d-flex flex-column flex-grow-1"> 
            <div>Showing chat from {room}</div>
            <div className="border border-left overflow-auto flex-grow-1"></div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-1">
                    <InputGroup>
                        <Form.Control
                            as="textarea"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            style={{ height: '75px', resize: 'none' }}
                        />     
                        <Button type="submit">Send</Button>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
    
}

export default Chat