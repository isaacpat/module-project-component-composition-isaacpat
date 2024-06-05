import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'



const URL = 'http://localhost:9009/api/apod?api_key=DEMO_KEY'




export default function App() {
const [data, setData] = useState()

useEffect(() => {
  function fetchAPOD(){
    axios.get(URL)
   .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err.message)
  })
  }
  fetchAPOD()

},[])

if (!data) return <p>Fetching photo of the Day...</p>
  return (
 <section>
    <Card 
    title={data.title} 
    text={data.explanation} 
    image={data.url} 
    author={data.copyright}
    date={data.date} 
    />
   
 </section>
  )
}


