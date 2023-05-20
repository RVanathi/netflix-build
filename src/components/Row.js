import axios from "../axios";
import React, { useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.css";
import Movies from "./Movies";
// import { API_KEY } from "../requests";

const Row = ({ title, fetchUrl, isLargeRow = false, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const slideLeft = () => {
    const slider = document.querySelector("#slider" + rowID);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.querySelector("#slider" + rowID);
    slider.scrollLeft += 500;
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // const handleClick = (movie) => {
  //   async function fetchMovie(id) {
  //     const request = await axios.get(
  //       `/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  //     );
  //     console.log("the data: ", request.data);
  //     return request;
  //   }
  //   fetchMovie(movie.id);
  // };

  return (
    <>
      <h2 className="row-title">{title}</h2>
      <div className="row">
        <IoIosArrowDropleftCircle
          onClick={slideLeft}
          className="scroll-icon left"
          size={40}
        />
        <div id={"slider" + rowID} className="row-scroll">
          {movies.map(
            (movie, id) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <Movies
                  key={id}
                  movie={movie}
                  isLargeRow={isLargeRow}
                  handleClick={handleClick}
                />
              )
          )}
        </div>
        <IoIosArrowDroprightCircle
          onClick={slideRight}
          className="scroll-icon right"
          size={40}
        />
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
};

export default Row;
