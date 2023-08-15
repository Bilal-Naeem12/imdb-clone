import React, { useContext, useEffect, useState } from "react";
import "./Detail.css";
import Feature from "./Feature";
import Genre from "./Genre";
import DuplicatedDiv from "../../Component/DuplicatedDiv";
import { useParams } from "react-router-dom";
import Spinner from "../../Component/MovieList/Spinner";
import Context from "../../Context/Context";
import Card from "../../Component/Card/Card";
import { useRef } from "react";

export default function Detail() {
  const setstatus = useContext(Context);
  let { id } = useParams();
  const [Movie, setMovie] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [movieList, setmovieList] = useState([]);

  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -800, behavior: "smooth" }); // Adjust the value as needed
  };

  const handleScrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 800, behavior: "smooth" }); // Adjust the value as needed
  };
  const reset = () => {
    scrollContainerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setisLoading(true);
    getData();
    getSuggetion();

  

  

    reset();
  }, [id]);

  
 const returnStr = ()=>{

    for (let index = 0; index < Movie.videos.results.length; index++) {
    if (Movie.videos.results[index].key) {
      console.log("helloooo ma video hu")
    return  Movie.videos.results[index].key
    }
        
    }
    
        }
  const getSuggetion = async () => {
    try {
        await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${
              Math.random() * 50
            }`
          )
            .then((res) => res.json())
            .then((data) => {
              setmovieList(data.results);
            });
    } catch (error) {
        console.log(error)
    }
  
  };

  const getData = async () => {
    try {
        setstatus.update(false);

        let data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&append_to_response=videos`
        );
        let parsedData = await data.json();
        console.log("this is Movie" + parsedData.genres);
        setisLoading(false);
        setstatus.update(true);
        setMovie(parsedData);
    } catch (error) {
        console.log(error)
    }
   
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="parent1" >
      <div
        className="parallax position-relative d-flex align-items-end  "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            Movie ? Movie.backdrop_path : ""
          })`,
        }}
      ></div>

      <div className="card position-relative bg-dark text-white pt-4  px-5 super-parent ">
        <img
          className="position-absolute image-card"
          src={`https://image.tmdb.org/t/p/original${
            Movie ? Movie.poster_path : ""
          }`}
          alt="..."
        />
        <div className="d-flex flex-column   px-1 gap-0 text-white position-absolute details ">
          <h1 className="title">{`${Movie?.title}`}</h1>

          <div className="rating d-flex gap-3 align-items-center ">
            <span className="voting_points">
              {Number.parseFloat(Movie?.vote_average).toFixed(2)}
            </span>
            <span className="start">
              <DuplicatedDiv n={Math.ceil(Movie?.vote_average / 2)} />
            </span>
          </div>

          <div className="release_date mb-3 ">{Movie?.release_date}</div>
          <div className="genre mb-3 d-flex  gap-4">
            {
                Movie?.genres?.map((e) => {
                    return <Genre text={e?.name} />;
                  })
            }
          </div>
        </div>
        <div className="   over">
          <h2>Overview</h2> <p>{`${Movie ? Movie.overview : ""}`}</p>
        </div>

        <div className="d-flex justify-content-between  align-items-start mt-5 gap-5 parent ">
          <div className="   movie-Detail  d-flex  flex-column justify-content-center gap-5  align-items-center ">
            <h2 className="">Production Companys</h2>

            <div className="d-flex flex-column gap-5 company  ">
              {" "}
              {Movie.production_companies?.map((e) => {
                console.log(e);
                return e.logo_path ? (
                  <img
                    className=" image-mini-card   "
                 
                    src={`https://image.tmdb.org/t/p/original${e.logo_path}`}
                    alt="..."
                  />
                ) : (
                  <></>
                );
              })}
            </div>
          </div>

          <div class="outer ">
            <div class="inner"></div>
          </div>

          <div className="    movie-Detail  d-flex  flex-column gap-2 justify-content-center  align-items-center ">
            <h2 className="">Movie Details</h2>

            <div className="d-flex    flex-wrap detail justify-content-between align-items-center ">
              <Feature Key={"status"} Value={Movie.status} />
              <Feature Key={"title"} Value={Movie.title} />{" "}
              <Feature Key={"vote average"} Value={Movie.vote_average} />{" "}
              <Feature Key={"vote count"} Value={Movie.vote_count} />
              <Feature
                Key={"original language"}
                Value={Movie.original_language.toUpperCase()}
              />
                 <div className="linkss">
          <span className="me-5 linky">
            For More Detail Check Out This Link
          </span>{" "}
          <button
            type="button"
            className={`btn but ${
              !Movie.homepage ? "disabled" : ""
            } btn-danger`}
          >
            <a target="_blank" href={Movie.homepage}>
              Home Page <i class="ms-1 fa-solid fa-up-right-from-square"></i>
            </a>
          </button>
        </div>
            </div>
          </div>
        </div>
       
           {/* video */}
           <div className="d-flex flex-column justify-content-center  align-items-center 
           ">
           <h2 className="text-center trailer">Trailer</h2>
{          <iframe
className="mx-auto"
       align="center"
          src={`https://www.youtube.com/embed/${ returnStr() }`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> 
    } 
     

</div>
      
        {/* Suggestions */}
        <div className="movie_list_d text-start  position-relative ">
        
        <h2 className=" ">Sugguestions</h2>
          <i
            class="fa-solid fa-chevron-left sug-btn-left scroller-btn "
            onClick={handleScrollLeft}
          ></i>
          <div className="cover_d text-light " ref={scrollContainerRef}>
          <div className="d-flex gap-3  moviee">
              {movieList.map((e) => {
                for (let i = 0; i < Movie.genres.length; i++) {
                  if (
                    e.genre_ids?.includes(Movie.genres[i]?.id) &&
                    e.backdrop_path !== null &&
                    e.original_title !== Movie.original_title
                  ) {
                    return <Card movie={e} />;
                  }
                }
              })}
          </div>
         
          </div>
          <i
            class="fa-solid fa-chevron-right sug-btn-right scroller-btn "
            onClick={handleScrollRight}
          ></i>
        </div>

     
      </div>
    </div>
  );
}
