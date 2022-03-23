import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Login = () => {
    const idRef = useRef()

    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh'}}>
            <Form className='w-50'>
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required></Form.Control>
                </Form.Group>
                <Button type="submit" className="me-2">Login</Button>
                <Button variant='secondary'>Create new ID</Button>
            </Form>
        </Container>
    )
}

export default Login