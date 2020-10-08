import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Banner.css";
import requests from "./request";
import axios from "./axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
      >
      <div className="banner__content">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

      </div>
    </header>
  );
}

export default Banner;
