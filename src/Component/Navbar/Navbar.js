
import "./Navbar.css"
import { Await, Link } from 'react-router-dom'

import React, { Component } from 'react'

export default class Navbar extends Component {

  constructor() {
    super()
    this.state = {
      types: ""
    }

  }

  componentDidMount() {
    this.active()
  }


  active =  () => {

    let url = document.URL;
    
    let parts = url.split('/');

   this.setState({


      types: parts[parts.length - 1]
    })
  
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div className="container">
          <Link className={`navbar-brand ${this.state.types === "" ? "" : ""}`} onClick={this.componentDidMount} to="/"><img src="https://logos-download.com/wp-content/uploads/2016/11/IMDb_logo_logotype.png" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex justify-content-between">
              <li className="nav-item">
                <Link className={`nav-link  hover-link ${this.state.types === "popular" ? "active-link" : ""}`} onClick={this.componentDidMount} aria-current="page" to="/movies/popular">Popular</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link hover-link ${this.state.types === "top_rated" ? "active-link" : ""} `} onClick={this.componentDidMount} to="/movies/top_rated">Top Rated</Link>
              </li> 
              <li className="nav-item">
                <Link className={`nav-link hover-link ${this.state.types === "upcoming" ? "active-link" : ""} }  `} onClick={this.componentDidMount} to="/movies/upcoming">Upcoming</Link>
              </li>
              <li className="nav-item">

              </li>
            </ul>
            <div className="d-flex align-items-center hover-link "> <i className="fa-solid fa-circle-user user me-2"></i>
              <span className=' '>User</span></div>

          </div>
        </div>
      </nav>
    )
  }
}

