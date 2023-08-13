
import "./Home.css"
import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../Component/MovieList/MovieList";
import DuplicatedDiv from "../../Component/DuplicatedDiv";
import Spinner from "../../Component/MovieList/Spinner";
export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      popularMovies: [],
      star :[]
      ,spin: true,
      num : 0
    }


  }

  async componentDidMount() {
    try {
      let data = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      let parsedData = await data.json()
      console.log(parsedData.results)
  
      this.setState({
        popularMovies: parsedData.results
       , spin: false,
       num : (Math.random()*10+1)
      })
    } catch (error) {
      console.log(error);
    }
    this.setState({}) 

  }


  render() {
    return (
     
     this.state.spin ? <Spinner />:
     <>
        <div className="poster">
          <Carousel autoPlay={true} showThumbs={false} transitionTime={2} infiniteLoop={true} showStatus={false} showArrows={true}>
            {

              this.state.popularMovies.splice(this?.statenum,this.state.popularMovies.length-this.state?.num).map((e) => {
                if ( e.backdrop_path !== null) {
                
                  return <>
                    <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${e.id}`} >
                      <div className="immg">
                        <img className="immg2" src={`https://image.tmdb.org/t/p/original${e && e.backdrop_path}`} alt="" />
                      </div>
                      <div className="poster_Overlay">
                        <div className="poster_title">
                          {e ? e.original_title : ""}
                        </div>
                        <div className="poster_release">
                          {e ? e.release_date : ""}
                          <div className="rating d-flex gap-3">{e.vote_average != 0 ?e.vote_average :""}  <span> <DuplicatedDiv n={Math.ceil (e.vote_average/2)} /> </span></div>
                        </div>
                        <div className="post_description">
                          {e.overview.length > 205 ? e.overview.substring(0,205) + " ...." : e.overview}
                        </div>
                      </div>
                    </Link>
                  </>
                }
         

              })}






          </Carousel>
        </div>
        <MovieList />
        </>
            

  
    )
  }
}

