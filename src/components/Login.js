import React, { useRef } from 'react'
import { Container, Form, Button, Col } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import { useSocket } from '../contexts/SocketContext'

export default function Login({ setUser, setRoom }) {
  const userNameRef = useRef()
  const roomRef = useRef()
  const socket = useSocket()


  function handleSubmit(e) {
    e.preventDefault()

    setUser(userNameRef.current.value)
    setRoom(roomRef.current.value)
    const loginInfo = {
      userName: userNameRef.current.value,
      room: roomRef.current.value
    }
    socket.emit('join-room', loginInfo)
  }

  function createNewId() {
    userNameRef.current.value = uuidV4()
  }


  return (
    <Container fluid className="align-items-center d-flex bg-light" style={{ height: '100vh' }}>
      <Col md={{ span: 6, offset: 3}}>
        <h1 className="p-4">React Chat App Demo</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Enter Your Username</Form.Label>
            <Form.Control type="text" ref={userNameRef} required />
          </Form.Group> 
          <Button onClick={createNewId} className="m-2" variant="secondary">Create A Random Username</Button>
          <Form.Group>
            <Form.Label>Enter A Room</Form.Label>
            <Form.Control type="text" ref={roomRef} required />
          </Form.Group> 
          <Button type="submit" className="m-2">Join chat!</Button>
        </Form>
      </Col>
      
    </Container>
  )
}