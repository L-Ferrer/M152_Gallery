import { useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './App.css'
import cimg1 from './assets/class1.jpg'
import cimg2 from './assets/class2.jpg'
import cimg3 from './assets/class3.jpg'

const itemData = [
  {
    img: cimg1,
    title: 'Class1',
  },
  {
    img: cimg2,
    title: 'Class2',
  },
  {
    img: cimg3,
    title: 'Class3',
  }
]

function Gallery() {
  return (
    <div className="App">
      <div>
      <ImageList sx={{ width: 768, height: 432 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=768&h=432&fit=crop&auto=format`}
            srcSet={`${item.img}?w=768&h=432&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
        ))}
      </ImageList>
      </div>
    </div>
  )
}


export default Gallery
