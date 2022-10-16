import { useState } from 'react'
import './App.css'
import { Message } from './Components/Message/Message'

function App() {
  const [myName, setMyName] = useState('Elena')

  const handleChangeName = (el) => {
    setMyName(el.target.value)
  }
  return (
    <div className="App">
      {' '}
      Ниже отображается компонент Message
      <Message name={myName} />
      <p>Change name here</p>
      <input onChange={handleChangeName} />
    </div>
  )
}

export default App
