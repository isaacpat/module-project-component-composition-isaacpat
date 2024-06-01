import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'


const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`




function App() {
const [apod, setApod] = useState()

useEffect(() => {
  function fetchPhoto(){
    axios.get(URL)
   .then(res => {
      console.log(res.data)
      setApod(res.data)
    })
    .catch(err => {
      console.log(err.message)
  })
  }
  fetchPhoto()
  // setApod({
        
      
  //         "date": "2024-05-31",
  //         "explanation": "Made with narrowband filters, this cosmic snapshot covers a field of view over twice as wide as the full Moon within the boundaries of the constellation Cygnus. It highlights the bright edge of a ring-like nebula traced by the glow of ionized hydrogen and oxygen gas. Embedded in the region's expanse of interstellar clouds, the complex, glowing arcs are sections of shells of material swept up by the wind from Wolf-Rayet star WR 134, brightest star near the center of the frame. Distance estimates ...",
  //         "hdurl": "https://apod.nasa.gov/apod/image/2405/NebulousRealmofWR134_2048.png",
  //         "media_type": "image",
  //         "service_version": "v1",
  //         "title": "The Nebulous Realm of WR 134",
  //         "url": "https://apod.nasa.gov/apod/image/2405/NebulousRealmofWR134_1024.png"
       
  // })
},[])

if (!apod) return 'Fetching photo of the Day...'
  return (
 <section>
    <Card title={apod.title} text={apod.explanation} imageURL={apod.url} date={apod.date} />
   
 </section>
  )
}

export default App
