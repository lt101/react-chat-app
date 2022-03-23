import React from 'react'
import useSessionStorage from '../hooks/useSessionStorage'
import Login from './Login'
import Dashboard from './Dashboard'

const App = () => {
  const [id, setId] = useSessionStorage('id')

  return (
      id? <Dashboard id={id} /> : <Login onIdSubmit={setId}/>
  )
}

export default App