import React, { useEffect,useState } from 'react'
import "./Navbar.css"
import Moviepreview from './Moviepreview'

import Spinner from '../MovieList/Spinner'
export default function Search(props) {

const [Moives, setMoives] = useState([])
const [spin, setspin] = useState(true)
useEffect(()=>{
  setspin(true)
getData()
setTimeout(()=>{
  setspin(false)
},2000)
},[props.text])

const getData = async ()=>{
let data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${props.text.replace(/\s+/g, '+')}&api_key=4e44d9029b1270a757cddc766a1bcb63`)
let parsedData = await data.json()
setMoives(parsedData.results)

}
  
  return (
  
    <div className={`parent-div ${props.display ? "height":""}  `} >
   { spin ? <div className='spin'><Spinner /></div> 
:
<div className={`movie-detail  `}>
{
Moives.length !== 0 ?
Moives.map((e,i)=>{if (e.backdrop_path !== null && e.vote_average !== 0 ) {
  return <Moviepreview movie={e} />
}

}) :
<div className='not-found  '><h1>Not Found :(</h1></div>
}</div>
}
    </div>
  )
}
