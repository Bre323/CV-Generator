import { useState } from 'react'
import Editor from './components/editor'
import Preview from './components/preview'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Editor />
      <Preview />
    </>
  )
}

export default App
