import "./Navbar.css";
import { Link } from "react-router-dom";

import React, { useState, useContext,useEffect } from "react";
import Search from "./Search";
import Context from "../../Context/Context";

export default function Navbar() {
  const a = useContext(Context);
  const [types, settypes] = useState("");
  const [searchText, SetsearchText] = useState("");

 const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
    }
  }

 const searching = (e) => {

  SetsearchText(e.target.value)
if (e.target.value === "") {
  a.setstatus({ ...a.status, display: false});
}
else{
  a.setstatus({ ...a.status,display: true });
}
  }


  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [navbarVisible, setNavbarVisible] = useState(true);
useEffect(()=>{
SetsearchText("")
},[document.URL])
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
       
        setNavbarVisible(true);
      } else {
        if (currentScrollPos > 200 && searchText.length === 0) {
          setNavbarVisible(false);
        }
      }
   
      setPrevScrollPos(currentScrollPos);
    };
    console.log("im useEffect");
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, [prevScrollPos]);

 


  return (
    <>
 
      <nav className="navbar navbar-expand-lg fixed-top  navbar-dark  container-fluid   ">
        <div className="container-fluid  ">
          <Link
            className={`navbar-brand ${types === "" ? "" : ""}`}
            onClick={() => {
              settypes("");
            }}
            to="/"
          >
            <img
              src="https://logos-download.com/wp-content/uploads/2016/11/IMDb_logo_logotype.png"
              alt=""
              className="me-5"
            />
          </Link>
     
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
  
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex justify-content-between">
              <li className="nav-item">
                <Link
                  className={`nav-link  hover-link ${
                    types === "popular" ? "active-link" : ""
                  }`}
                  onClick={() => {
                    settypes( "popular" );
                    console.log(types);
                  }}
                  aria-current="page"
                  to="/movies/popular"
                >
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link hover-link ${
                    types === "top_rated" ? "active-link" : ""
                  } `}
                  onClick={() => {
                    settypes("top_rated" );
                  }}
                  to="/movies/top_rated"
                >
                  Top Rated
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link hover-link ${
                    types === "upcoming" ? "active-link" : ""
                  } }  `}
                  onClick={() => {
                    settypes( "upcoming" );
                  }}
                  to="/movies/upcoming"
                >
                  Upcoming
                </Link>
              </li>
            
            </ul>
        
         
      <form className={`form-inline d-flex  search`}>
       <div className="d-flex justify-content-center  align-items-center s-icon"><i class="fa-solid fa-magnifying-glass"></i></div>       <input
                   value={searchText}
                className="form-control "
                onKeyDown={handleKeyDown}
                placeholder="Enter any Keyword"
                type="search"
                id="clickbox"
                onChange={searching}
                aria-label="Search"
              />
             
               <form class="d-flex" role="search">
       
      </form>
          
            </form>
 
         
          </div>
       
        </div>
    
      </nav>
      <div className={`search1 ${ navbarVisible ? "" : "search2"    }`} >
      <form className="form-inline d-flex  ">
       <div className="d-flex justify-content-center  align-items-center s-icon"><i class="fa-solid fa-magnifying-glass"></i></div>       <input
                   value={searchText}
                className="form-control "
                onKeyDown={handleKeyDown}
                placeholder="Enter any Keyword"
                type="search"
                id="clickbox"
                onChange={searching}
                aria-label="Search"
              />
             
               <form class="d-flex" role="search">
       
      </form>
          
            </form>
      </div>
      <span className="yoo fixed-top">
        <Search display={a.status.display}   text= {searchText}/>
      </span>
    </>
  );
}
