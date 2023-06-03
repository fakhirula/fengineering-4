import { useEffect, useState } from "react";
import axios from "axios";

import Movies from "../../components/Movies/Movies";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  async function fetchPopularMovies() {
    const response = await axios(URL);

    setMovies(response.data.results);
  }

  useEffect(function () {
    fetchPopularMovies();
  }, []);

    return (
      <>
        <Movies
          title={'Now Playing Movie'}
          movies={movies}
          setMovies={setMovies}
        />
      </>
    );
}

export default NowPlaying;