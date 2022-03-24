import React from 'react'
import useSessionStorage from '../hooks/useSessionStorage'
import Login from './Login'
import Dashboard from './Dashboard'
import { ContactsProvider } from '../contexts/ContactsProvider'

const App = () => {
  const [id, setId] = useSessionStorage('id')

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )

  return (
      id? dashboard : <Login onIdSubmit={setId}/>
  )
}

export default App