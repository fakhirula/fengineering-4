import { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINT from "../../utils/constants/endpoint";

import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function Popular() {
  const [movies, setMovies] = useState([]);

  async function fetchPopularMovies() {
    const response = await axios(ENDPOINT.POPULAR);

    setMovies(response.data.results);
  }

  useEffect(function () {
    fetchPopularMovies();
  }, []);

    return (
      <>
        <Hero />
        <Movies title="Popular Movies" movies={movies} setMovies={setMovies} />
      </>
    );
}

export default Popular;