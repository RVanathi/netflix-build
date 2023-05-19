import axios from "../axios";
import React, { useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import "./row.css";
import Movies from "./Movies";

const Row = ({ title, fetchUrl, isLargeRow = false, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const slideLeft = () => {
    const slider = document.querySelector("#slider" + rowID);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.querySelector("#slider" + rowID);
    slider.scrollLeft += 500;
  };

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
                <Movies key={id} movie={movie} isLargeRow={isLargeRow} />
              )
          )}
        </div>
        <IoIosArrowDroprightCircle
          onClick={slideRight}
          className="scroll-icon right"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
