import { useEffect } from "react";
import axios from "axios";

import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";
import Hero from "../../components/Hero/Hero";
import { useDispatch } from 'react-redux';
import { updateMovies } from '../../feature/moviesSlice';

function NowPlaying() {
  const dispatch = useDispatch();

  async function fetchPopularMovies() {
    const response = await axios(ENDPOINT.NOWPLAYING);
    dispatch(updateMovies(response.data.results));
  }

  useEffect(function () {
    fetchPopularMovies();
  }, []);

    return (
      <>
        <Hero />
        <Movies title="Now Playing Movie" />
      </>
    );
}

export default NowPlaying;