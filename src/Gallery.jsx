import Lightroom from 'react-lightbox-gallery'
import './App.css'

//Images
import quantum_dog from '/18f11103dd833e388c91a9c9ff64642079c8f894e1a6f6d7e2b608984d24a040_1.jpg'
import society from '/277598281_284332320531466_2748313775937039729_n.jpg'
import DBZ from '/pic.png'
import drone from '/Screenshot (20).png'
import frnch from '/Screenshot_20220131-192426_Reddit.jpg'
import brazil_nr1 from '/Screenshot_20220523-235533_Reddit.jpg'
import patrick from '/tckxwcaupyk81.jpg'
import butterdawg from '/vjbq0agkk8q81.jpg'

//GIFs
import burger from '/burger-bussin.gif'
import hacked_phone from '/phone_hacked.gif'

const images = [
  {
    src: quantum_dog,
    desc: "Quantum physics ain't lying",
  },
  {
    src: DBZ,
    desc: 'Could he though',
  },
  {
    src: drone,
    desc: 'Behold; The legendary Zelensky-Mobil',
  },
  {
    src: butterdawg,
    desc: 'butter dawg',
  },
  {
    src: society,
    desc: 'Society... ð',
  },
  {
    src: frnch,
    desc: 'Fr*nch ð¤®',
  },
  {
    src: brazil_nr1,
    desc: 'CAMPEÃO DO MUNDO ðâï¸âï¸âï¸ð¥',
  },
  {
    src: patrick,
    desc: 'he a real one',
  },
]
const gifs = [
  {
    src: burger,
    desc: "'Bussin' Barbecue Bacon Burger from Beckers'",
  },
  {
    src: hacked_phone,
    desc: 'ð¤¨ð¤¨ð¤¨',
  }
]

const settings = {
  columnCount:{
    default:3,
    mobile:2,
    tab:3
  },
  mode: 'dark'
}

function handleClick(){
  //window.scrollTo(0,0);
  window.scroll({top: 0, behavior: 'smooth' })
}

function Gallery() {
  return (
    <div className="App">
      <div onClick={() => handleClick()}>
        <Lightroom images={images} settings={settings}/>
      </div>
    </div>
  )
}


export default Gallery
