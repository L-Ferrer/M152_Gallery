import { useState } from 'react'
import Gallery from './Gallery.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Gallery></Gallery>
        </div>
    </div>
  )
}

export default App
