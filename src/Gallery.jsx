import { useState } from 'react'
import Lightroom from 'react-lightbox-gallery'
import './App.css'
import cimg1 from './assets/class1.jpg'
import cimg2 from './assets/class2.jpg'
import cimg3 from './assets/class3.jpg'

const images = [
  {
    src: "https://images.unsplash.com/photo-1577279549270-b9e297533cdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    desc: 'Person wearing shoes',
    sub: 'Gift Habeshaw'
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
