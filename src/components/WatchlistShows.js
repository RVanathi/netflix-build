import React, { useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import db from "../firebase";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import "./watchlistShows.css";

const WatchlistShows = () => {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const [shows, setShows] = useState([]);
  const user = useSelector(selectUser);
  const showRef = doc(db, "customers", `${user?.uid}`);

  const slideLeft = () => {
    const slider = document.querySelector("#slider");
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.querySelector("#slider");
    slider.scrollLeft += 500;
  };

  useEffect(() => {
    if (user !== null) {
      onSnapshot(
        showRef,
        (snap) => {
          // console.log("data:", doc.data().savedShows);
          setShows(snap.data()?.savedShows);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [user, showRef]);

  const removeShow = async (passedID) => {
    try {
      const result = shows.filter((show) => show.id !== passedID);
      await updateDoc(showRef, { savedShows: result });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="watch-title">My List</h2>
      <div className="watch">
        <IoIosArrowDropleftCircle
          onClick={slideLeft}
          className="scroll-icon left"
          size={40}
        />
        <div id={"slider"} className="watch-scroll">
          {shows.map((show, id) => (
            <div className="watch-posters" key={id}>
              <img
                className="watch-poster"
                key={show.id}
                src={`${baseUrl}${show.img}`}
                alt={show.title}
              />
              <div className="overlay">
                <p className="show-title">{show.title}</p>
                <p onClick={() => removeShow(show.id)} className="close-icon">
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <IoIosArrowDroprightCircle
          onClick={slideRight}
          className="scroll-icon right"
          size={40}
        />
      </div>
    </div>
  );
};

export default WatchlistShows;
