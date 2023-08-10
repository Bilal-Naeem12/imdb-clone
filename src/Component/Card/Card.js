import React ,{useEffect,useState} from 'react'
import Skeleton , {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./Card.css"
import { Link } from 'react-router-dom'
export default function Card({movie}) {
    const [isloading,setIsloading] = useState(true)
  

    useEffect(()=>{
        setTimeout(()=>{
            setIsloading(false)
        },5000)
    },[])




  return (<>
 { isloading ? <div className="cards">
 <SkeletonTheme baseColor="#202020" highlightColor="#f5f5f5">

 <Skeleton height={400} duration={2}>




 </Skeleton>

    </SkeletonTheme>
   </div>
   :
   <Link to={`/movie/${movie.id}`} style={{color:"white",textDecoration:"none"}}>
   
   <div className="cards">

    <img className='card_img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="" />
    <div className="cards_overlay ">
        <div className="card_title ">{movie?movie.original_title:""}</div>
        <div className="card_rating mt-1   ">
            <span>{movie?movie.release_date:""}</span>
      
       <span className=''> {movie?movie.vote_average:""}<i className="fa-solid fa-star icon"></i></span>
       
       </div>
        <div className="card_description mt-2">{movie?movie.overview.slice(0,100)+"...":""}</div>
        
    </div>
   </div>
   
   
   
   </Link>
}
   </>
  )
}
