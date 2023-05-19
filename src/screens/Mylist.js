import React from "react";
import Nav from "../components/Nav";
import "./mylist.css";
import WatchlistShows from "../components/WatchlistShows";

const Mylist = () => {
  return (
    <div className="mylist">
      <header className="header">
        <img
          className="mylist-header"
          src="https://winbuzzer.com/wp-content/uploads/2019/01/netflix-reuse-official.jpg"
          alt=""
        />
        <div className="mylist-gradient" />
        <Nav />
        <div className="mylist-title">
          <h1>My List</h1>
        </div>
      </header>
      <WatchlistShows />
    </div>
  );
};

export default Mylist;
