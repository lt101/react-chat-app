import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

const Login = ({ onIdSubmit }) => {
    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    function generateId() {
        onIdSubmit(uuidV4());
    }

    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh'}}>
            <Form onSubmit={handleSubmit} className='w-50'>
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required></Form.Control>
                </Form.Group>
                <Button type="submit" className="me-2">Login</Button>
                <Button onClick={generateId} variant='secondary'>Create new ID</Button>
            </Form>
        </Container>
    )
}

export default Login