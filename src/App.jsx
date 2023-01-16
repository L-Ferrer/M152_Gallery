import { useState } from 'react'
import Gallery from './pages/Gallery.jsx'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Video from './pages/Video.jsx'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="video" element={<Video />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
