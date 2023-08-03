
import React, { useEffect, useState, useContext } from 'react'
import "./MovieList.css"
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import Spinnner from "./Spinner"

import Context from '../../Context/Context'

export default function MovieList() {
  
    const a = useContext(Context)
    const [spinner, setspinner] = useState(false)
    const [movieList, setmovieList] = useState([])
    const { types } = useParams()
const [page, setpage] = useState(1)

    const getData = async () => {

        await fetch(`https://api.themoviedb.org/3/movie/${types ? types : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`)
            .then(res => res.json()).then(data => { setmovieList(data.results) })
            console.log(page+ "fetch")

    }

const loadMore  = async ()=>{
setpage(page+1)

console.log(page+ "onclick")
await fetch(`https://api.themoviedb.org/3/movie/${types ? types : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`)
.then(res => res.json()).then(data => { setmovieList(movieList.concat(data.results)) })
}



    useEffect(() => {
       



        
        a.update(false)
        setspinner(true)
        setTimeout(() => {
            setspinner(false)
            a.update(true)
        }, 2000);
        getData()
        setpage(page+1)
    }, [types])

 

    return (
        spinner ? <Spinnner /> :
            <div className="movie_list contianer ">
                <h1 className='list_title'>{(types ? types : "POPULAR").toUpperCase()}</h1>
                <div className="cover">
                    <div className="list_Cards gap-1 d-flex flex-wrap ">
                        {
                            movieList.map((e) => {
                                if (e.backdrop_path !== null) {
                                    return <Card movie={e} />
                                } return
                            })
                        }
                    </div>
                    
                </div>
                <div className='moreLoad  '>
                    <div className='load'>
                    <i class="fa-solid fa-arrow-down" onClick={loadMore}></i>
                    </div>
                </div>
              
            </div>

    )
}


