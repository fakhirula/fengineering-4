import { useEffect, useState } from "react";
import axios from "axios";

import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";

function TopRated() {
  const [movies, setMovies] = useState([]);

  async function fetchTopMovies() {
    const response = await axios(ENDPOINT.TOPRATED);

    setMovies(response.data.results);
  }

  useEffect(function () {
    fetchTopMovies();
  }, []);

    return (
      <>
        <Movies title="Top Rated Movies" movies={movies} setMovies={setMovies} />
      </>
    );
}

export default TopRated;