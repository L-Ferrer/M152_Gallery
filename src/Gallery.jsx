import { useState } from 'react'
import Lightroom from 'react-lightbox-gallery'
import './App.css'
import quantum_dog from './assets/18f11103dd833e388c91a9c9ff64642079c8f894e1a6f6d7e2b608984d24a040_1.jpg'

const images = [
  {
    src: quantum_dog,
    desc: "Quantum physics ain't lying",
  },
  {
    src: "https://images.unsplash.com/photo-1577277625082-36df4915ebeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    desc: 'Blonde woman wearing sunglasses smiling at the camera ',
    sub: 'Dmitriy Frantsev'
  }
]
const settings = {
  columnCount:{
    default:5,
    mobile:3,
    tab:4
  },
  mode: 'dark'
}

function Gallery() {
  return (
    <div className="App">
      <div>
        <Lightroom images={images} settings={settings} />
      </div>
    </div>
  )
}


export default Gallery
