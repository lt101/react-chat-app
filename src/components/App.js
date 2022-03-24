import React from 'react'
import Login from './Login'
import MainMenu from './MainMenu'
import useSessionStorage from '../hooks/useSessionStorage'

function App() {
    const [user, setUser] = useSessionStorage('user')

  return (
    <>
      {user? <MainMenu user={user} /> : <Login onUserSubmit={setUser} />}
    </>
    
  )
}

export default App