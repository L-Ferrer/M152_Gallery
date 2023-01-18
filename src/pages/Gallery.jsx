import Lightroom from 'react-lightbox-gallery'

//Images
import quantum_dog from '/18f11103dd833e388c91a9c9ff64642079c8f894e1a6f6d7e2b608984d24a040_1.jpg'
import society from '/277598281_284332320531466_2748313775937039729_n.jpg'
import DBZ from '/pic.png'
import drone from '/Screenshot (20).png'
import frnch from '/Screenshot_20220131-192426_Reddit.jpg'
import brazil_nr1 from '/Screenshot_20220523-235533_Reddit.jpg'
import patrick from '/tckxwcaupyk81.jpg'
import butterdawg from '/vjbq0agkk8q81.jpg'
import nice_fella from '/IMG_20220302_234810-1.jpg'
import how from '/J5bXqaYBno4.jpg'
import bozo from '/80670464-1960-49B2-A105-670B0F2F38BD.jpg'
import argument from '/B4FBE83B-18C9-4792-BE72-D67ED14561B9.jpg'
import real from '/20211209_164314.jpg'
import saddam_hussein from '/saddam_hussein.jpg'

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
    desc: 'Society... 😔',
  },
  {
    src: frnch,
    desc: 'Fr*nch 🤮',
  },
  {
    src: brazil_nr1,
    desc: 'CAMPEÃO DO MUNDO 🏆☝️☝️☝️🥇',
  },
  {
    src: patrick,
    desc: 'he a real one',
  },
  {
    src: nice_fella,
    desc: 'What a nice fella',
  },
  {
    src: how,
    desc: '😔',
  },
  {
    src: bozo,
    desc: 'Fuck em haters',
  },
  {
    src: argument,
    desc: 'Average tuesday',
  },
  {
    src: real,
    desc: 'real',
  },
  {
    src: saddam_hussein,
    desc: 'Saddam Hussein'
  }
]

const settings = {
  columnCount: {
    default: 3,
    mobile: 2,
    tab: 3
  },
  mode: 'dark'
}

function handleClick() {
  //window.scrollTo(0,0);
  window.scroll({ top: 0, behavior: 'smooth' })
}

function Gallery() {
  return (
    <div className="App">
      <div onClick={() => handleClick()} className="gallery">
        <Lightroom images={images} settings={settings} />
      </div>
    </div>
  )
}


export default Gallery
