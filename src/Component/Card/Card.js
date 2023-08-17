import React ,{useEffect,useState} from 'react'
import Skeleton , {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./Card.css"
import { Link } from 'react-router-dom'
export default function Card({movie}) {
    const [isloading,setIsloading] = useState(true)
  
    const [screen,setScreen] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setIsloading(false)
        },3000)
        setScreen(window.innerWidth)
    },[])




  return (<>
 { isloading ? <div className="cards">
 <SkeletonTheme baseColor="#202020" highlightColor="#f5f5f5">

 <Skeleton height={screen <= 990 ?200: 300}  duration={2}>

{console.log(screen + "assssssssss")}


 </Skeleton>

    </SkeletonTheme>
   </div>
   :
    <div className="cards"> 
   <Link to={`/movie/${movie.id}`} style={{color:"white",textDecoration:"none"}}>
   
   

    <img className='card_img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="" />
    <div className="cards_overlay ">
        <div className="card_title ">{movie?movie.original_title:""}</div>
        <div className="card_rating mt-1 d-flex justify-content-between w-75  ">
            <span>{movie?movie.release_date:""}</span>
      
       <span className=''> {movie?movie.vote_average:""}<i className="fa-solid fa-star icon"></i></span>
       {console.log()}
       </div>
        <div className="card_description mt-2">{movie?movie.overview.slice(0,100)+"...":""}</div>
        
    </div>

   
   
   
   </Link>
     </div> 
}
   </>
  )
}
