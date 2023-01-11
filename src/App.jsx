import { useState } from 'react'
import Gallery from './Gallery.jsx'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Video from './Video.jsx'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="video" element={<Video />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
