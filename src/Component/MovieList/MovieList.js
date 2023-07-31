
import React,{ useEffect ,useState}from 'react'
import "./MovieList.css"
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import Spinnner from "./Spinner"


export default function MovieList({setstatus}) {
const [spinner, setspinner] = useState(true)
    const [movieList, setmovieList] = useState([])
const {types}  = useParams()


const getData =async ()=>{
  
    await fetch(`https://api.themoviedb.org/3/movie/${types ? types:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
     .then(res => res.json()).then(data =>{ setmovieList(data.results)})
    
 }


useEffect(()=>{
    setstatus(false)
    setspinner(true)
    setTimeout(() => {
        setspinner(false)
        setstatus(true)
    }, 2000);
getData()

},[types])



return (
    spinner ? <Spinnner /> :
<div className="movie_list contianer ">
    <h1 className='list_title'>{(types  ?types : "POPULAR").toUpperCase()}</h1>
    <div className="cover">
    <div className="list_Cards gap-1 d-flex flex-wrap ">
        {
            movieList.map((e)=>{
                if (e.backdrop_path !== null) {
                 return   <Card movie = {e}/>
                }  return   
            })
        }
        </div>
    </div>
</div>

  )
}


export const status = ()=>{

}