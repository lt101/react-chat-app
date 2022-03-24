import React from 'react'
import { ListGroup } from 'react-bootstrap'

function MainMenu({ user }) {
  return (
      <>
        <div>Welcome {user}!</div>
        <ListGroup>
            <ListGroup.Item>item 1</ListGroup.Item>
            <ListGroup.Item>item 2</ListGroup.Item>
        </ListGroup>
      </>
  )

}

export default MainMenu