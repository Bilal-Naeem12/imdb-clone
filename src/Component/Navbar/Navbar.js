import React,{useState} from 'react'
import "./Navbar.css"
import { Link, useParams } from 'react-router-dom'
export default function Navbar(props) {
  const {types} = useParams()
 const setActive = (str)=>{

  if (str === types) {
    return "active-link"
  }
  return ""
}


  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
    <div className="container">
  <Link className="navbar-brand " to="/"><img src="https://logos-download.com/wp-content/uploads/2016/11/IMDb_logo_logotype.png" alt="" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex justify-content-between">
          <li className="nav-item">
            <Link className={`nav-link ${setActive("popular")}  hover-link`} aria-current="page" to="/movies/popular">Popular</Link>
          </li>{console.log("this is props" + props.types)}
          <li className="nav-item">
            <Link className={`nav-link hover-link ${setActive("top_rated")} `} to="/movies/top_rated">Top Rated</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link hover-link ${setActive("upcoming")} }  `}to="/movies/upcoming">Upcoming</Link>
          </li>
        </ul>
        <div className="d-flex align-items-center hover-link "> <i className  ="fa-solid fa-circle-user user me-2"></i>
        <span className=' '>User</span></div>
       
      </div> 
    </div> 
  </nav>
  )
}
