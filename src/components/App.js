import React, { useState} from 'react'
import Login from './Login'

const App = () => {
  const [Id, setId] = useState()

  return (
    <>
      {Id}
      <Login onIdSubmit={setId}/>
    </>
    
  )
}

export default App