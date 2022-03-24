import React, { useContext } from 'react'
import useSessionStorage from '../hooks/useSessionStorage'

const ContactsContext = React.createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useSessionStorage('contacts', [])

  function createContact(id, name) {
    setContacts(prevContacts => {
      return [...prevContacts, {id, name}]
    })
  }
  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  )
}
