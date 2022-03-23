import React, { useState } from 'react'
import { Tab, Nav, Button } from 'react-bootstrap'
import Contacts from './Contacts';
import Conversations from './Conversations';

const CONVERSATION_KEY = "conversations";
const CONTACTS_KEY = "contacts";


const Sidebar = ( { id }) => {
    const [activeKey, setActiveKey] = useState(CONVERSATION_KEY)
    const conversationsOpen = activeKey === CONVERSATION_KEY

    return (
        <div style={{ width: '250px' }} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className='="justify-content-center'>
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border border-right overflow-auto flex-grow-1">
                   <Tab.Pane eventKey={CONVERSATION_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane> 
                </Tab.Content>
                <div className="p-2 border-top border-right small">
                    Your id: <span className="text-muted"> {id}</span>
                </div>
                <Button>
                    New {conversationsOpen ? "Conversation" : "Contact"}
                </Button>
            </Tab.Container>
        </div>
    )
}

export default Sidebar