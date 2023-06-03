import { useEffect, useState } from "react";
import axios from "axios";

import Movies from "../../components/Movies/Movies";

function TopRated() {
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  async function fetchTopMovies() {
    const response = await axios(URL);

    setMovies(response.data.results);
  }

  useEffect(function () {
    fetchTopMovies();
  }, []);

    return (
      <>
        <Movies title={"Top Rated Movies"} movies={movies} setMovies={setMovies} />
      </>
    );
}

export default TopRated;