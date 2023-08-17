import React,{useContext} from 'react'
import "./Moviepreview.css"
import DuplicatedDiv from '../DuplicatedDiv'
import { Link } from 'react-router-dom'
import Context from '../../Context/Context'
export default function Moviepreview({movie}) {
const a = useContext(Context)


    return (
        <Link to={`http://localhost:3000/movie/${movie.id}`} style={{color:"white",textDecoration:"none"}} >
        <div className='d-flex py-2 rowss  hoverr ' >
            <div className='me-3'>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" className='pre-img' />
            </div>

            


        <div  className="texts"   style={{width:"80%"}}>
          <h5>{movie.original_title}</h5>
       
          <h6>{movie.release_date}</h6>
          <div className="stars d-flex gap-3">{movie.vote_average != 0 ?(movie.vote_average).toFixed(2)  :""}  <span > <DuplicatedDiv n={Math.ceil (movie.vote_average/2)} /> </span></div>
          </div>
        
        </div>
      
        </Link>
    )
}
