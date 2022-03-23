import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const NewContactModal = ({ closeModal }) => {

    const idRef = useRef()
    const nameRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        // createContact(idRef.current.value, nameRef.current.value)
        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>
                </Form>
                <Button type="submit">Create</Button>
            </Modal.Body>
        </>
    )
}

export default NewContactModal