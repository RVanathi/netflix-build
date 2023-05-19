import React from "react";
import "./home.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import requests from "../requests";
import Row from "../components/Row";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Banner />
      <Row
        rowID="1"
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row rowID="2" title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row rowID="3" title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row
        rowID="4"
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row rowID="5" title="Popular" fetchUrl={requests.fetchPopular} />
      <Row rowID="6" title="Animation" fetchUrl={requests.fetchAnimeShows} />
      <Row
        rowID="7"
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        rowID="8"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row rowID="9" title="Up Coming" fetchUrl={requests.fetchUpcoming} />
    </div>
  );
};

export default Home;
