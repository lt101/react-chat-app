import React, { useState, useContext, useEffect } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { RoomsContext } from '../contexts/RoomsContext'

function Chat({ socket }) {

    const {selectedRoom} = useContext(RoomsContext)
    const [text, setText] = useState('')
    const testRoom = 'cool room'

    function handleSubmit(e) {
        e.preventDefault()
        socket.emit('send-message', {text, testRoom})
        console.log({text, testRoom})
        setText('')
    }

    useEffect(() => {
        socket.on('receive-message', message => {
            console.log(`received something: ${message}`)
        })
    })

    return (
        <div style={{ width: '75%' }} className="d-flex flex-column flex-grow-1"> 
            <div>Showing chat from {selectedRoom}</div>
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