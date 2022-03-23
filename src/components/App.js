import React from 'react'
import useSessionStorage from '../hooks/useSessionStorage'
import Login from './Login'

const App = () => {
  const [Id, setId] = useSessionStorage('id')

  return (
    <>
      {Id}
      <Login onIdSubmit={setId}/>
    </>
    
  )
}

export default App