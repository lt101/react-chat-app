import React, { useState, useEffect, useCallback } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useSocket } from '../contexts/SocketContext'

function Chat({ user, room }) {

    const [text, setText] = useState('')
    const [messageList, setMessageList] = useState([])

    const setRef = useCallback(node => {
        if (node) {
          node.scrollIntoView({ smooth: true })
        }
      }, [])

    const socket = useSocket()

    async function handleSubmit(e) {
        e.preventDefault()

        if(text !== '') {
            const messageInfo = {
                from: user,
                text : text,
                room: room,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
            }
            await socket.emit('send-message', messageInfo)
            setText('')
        }
    }

    useEffect(() => {
        socket.on('receive-message', newMessage => {
            console.log(`received something: ${JSON.stringify(newMessage)}`)
            setMessageList(messageList => [...messageList, newMessage])
        })
    }, [socket])

    return (
        <div style={{ width: '75%' }} className="d-flex flex-column flex-grow-1"> 
            <div>Showing chat from {room}</div>
            <div className="border border-left overflow-auto flex-grow-1">
                <div className="d-flex flex-column align-items-start justify-content-end px-3">
                    {Object.values(messageList).map((messageInfo, index) => {
                        const lastMessage = messageList.length - 1 === index
                        return (
                          <div
                            ref={lastMessage ? setRef : null}
                            key={index}
                            className={`my-1 d-flex flex-column 
                            ${messageInfo.from === user ? 'align-self-end align-items-end' : 'align-items-start'}`}
                          >
                            <div
                              className={`rounded px-2 py-1 ${messageInfo.from === user ? 'bg-primary text-white' : 'bg-info text-white border'}`}>
                              {messageInfo.text}
                            </div>
                            <div className={`text-muted small ${messageInfo.from === user ? 'text-right' : ''}`}>
                              {messageInfo.from === user ? `You, ${messageInfo.time}` : `${messageInfo.from}, ${messageInfo.time}`}
                            </div>
                          </div>
                        )
                    })}
                </div>
            </div>
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