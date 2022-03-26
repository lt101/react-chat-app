import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ setUser, setRoom }) {
  const userNameRef = useRef()
  const roomRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    setUser(userNameRef.current.value)
    setRoom(roomRef.current.value)
  }

  function createNewId() {
    userNameRef.current.value = uuidV4()
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className="w-100">

        <Form.Group>
          <Form.Label>Enter Your Username</Form.Label>
          <Form.Control type="text" ref={userNameRef} required />
        </Form.Group> 
        <Button onClick={createNewId} variant="secondary">Create A Random Username</Button>
        
        <Form.Group>
          <Form.Label>Enter A Room</Form.Label>
          <Form.Control type="text" ref={roomRef} required />
        </Form.Group> 

        <Button type="submit" className="me-2">Join chat!</Button>
        
      </Form>
    </Container>
  )
}