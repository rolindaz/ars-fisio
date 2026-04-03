import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Hello Ars Fisio
      </h1>
      <Navbar/>
    </>
  )
}

export default App