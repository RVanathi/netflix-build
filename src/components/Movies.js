import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./movies.css";
import db from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movies = ({ movie, isLargeRow }) => {
  const [like, setLike] = useState(false);
  const user = useSelector(selectUser);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const userID = doc(db, "customers", `${user.uid}`);

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
            <BsPlusCircle onClick={saveShow} className="list-icon" />
          )}
        </p>
      </div>
    </div>
  );
};
export default Movies;
