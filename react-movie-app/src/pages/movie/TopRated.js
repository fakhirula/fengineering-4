import { useEffect } from "react";
import axios from "axios";

import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";
import Hero from "../../components/Hero/Hero";
import { useDispatch } from 'react-redux';
import { updateMovies } from '../../feature/moviesSlice';

function TopRated() {
  const dispatch = useDispatch();
  
  async function fetchTopMovies() {
    const response = await axios(ENDPOINT.TOPRATED);
    dispatch(updateMovies(response.data.results));
  }

  useEffect(function () {
    fetchTopMovies();
  }, []);

    return (
      <>
        <Hero />
        <Movies title="Top Rated Movies" />
      </>
    );
}

export default TopRated;