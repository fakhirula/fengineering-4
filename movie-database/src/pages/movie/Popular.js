import { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINT from "../../utils/constants/endpoint";

import Movies from "../../components/Movies/Movies";

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
        <Movies title="Popular Movies" movies={movies} setMovies={setMovies} />
      </>
    );
}

export default Popular;