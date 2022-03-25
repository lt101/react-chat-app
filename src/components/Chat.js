import React, { useState, useContext } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { RoomsContext } from '../contexts/RoomsContext'

function Chat() {

    const {selectedRoom} = useContext(RoomsContext)
    const [text, setText] = useState('')

    function handleSubmit(e) {

    }

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