import { useEffect, useState } from "react";
import axios from "axios";

import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  async function fetchPopularMovies() {
    const response = await axios(ENDPOINT.NOWPLAYING);

    setMovies(response.data.results);
  }

  useEffect(function () {
    fetchPopularMovies();
  }, []);

    return (
      <>
        <Movies
          title="Now Playing Movie"
          movies={movies}
          setMovies={setMovies}
        />
      </>
    );
}

export default NowPlaying;