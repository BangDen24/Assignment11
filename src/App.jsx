import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/component-1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component1 className="Title-container" 
      nama="nama"
      title="Hello World" 
      description="This is the example of props usage"
      />
    </>
  )
}

export default App
