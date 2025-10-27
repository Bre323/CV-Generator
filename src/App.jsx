import { useState } from 'react'
import Editor from './components/editor'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Editor />
    </>
  )
}

export default App
