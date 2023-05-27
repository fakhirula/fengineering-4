import { useEffect, useState } from "react";
import StyledHero from "./StyledHero";

import Button from "../ui/Button/Button";

function Hero() {
    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function fetchMovie() {
          const url = 'https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590';

          const response = await fetch(url);
          const data = await response.json();

          setMovie(data);
        }

        fetchMovie()
    }, []);

  return (
    <StyledHero>
        <div className="hero__bgimage"></div>
        <div className="container">
          <div className="hero">
            <div className="hero__left">
              <h2>{movie.Title}</h2>
              <h3>{movie.Genre}</h3>
              <p>{movie.Plot}</p>
              <Button variant="primary" size="md">Watch</Button>
            </div>
            <div className="hero__right">
              <img
                className="hero__image"
                src={movie.Poster}
                alt={movie.Title}
              />
            </div>
          </div>
        </div>
    </StyledHero>
  );
}

export default Hero;