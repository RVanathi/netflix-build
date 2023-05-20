import React, { useState } from "react";
import { BsPlusCircle, BsPlayCircle } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./movies.css";
import db from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

const Movies = ({ movie, isLargeRow, handleClick }) => {
  // handleClick
  const [like, setLike] = useState(false);
  // const [trailerUrl, setTrailerUrl] = useState("");
  const user = useSelector(selectUser);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const userID = doc(db, "customers", `${user.uid}`);

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };

  const saveShow = async () => {
    setLike(!like);
    await updateDoc(userID, {
      savedShows: arrayUnion({
        id: `${movie.id}`,
        title: `${movie?.title || movie.name}`,
        img: `${movie.backdrop_path}`,
      }),
    });
  };

  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  return (
    <div className="row-posters">
      <img
        className={`row-poster ${isLargeRow && "row-poster-large"}`}
        key={movie.id}
        src={`${baseUrl}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
      />
      <div className="overlay">
        <p className="movie-title">{movie?.title || movie?.name}</p>
        <p>
          {like ? (
            <TiTick className="list-icon" />
          ) : (
            <BsPlusCircle onClick={saveShow} className="l list-icon" />
          )}
          <BsPlayCircle
            onClick={() => handleClick(movie)}
            className="r list-icon"
          />
        </p>
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
};
export default Movies;
