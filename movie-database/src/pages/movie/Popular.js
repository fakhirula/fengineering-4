import { useEffect } from "react";
import axios from "axios";
import ENDPOINT from "../../utils/constants/endpoint";

import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../feature/moviesSlice";

function Popular() {
  const dispatch = useDispatch();

  async function fetchPopularMovies() {
    const response = await axios(ENDPOINT.POPULAR);
    dispatch(updateMovies(response.data.results));
  }

  useEffect(function () {
    fetchPopularMovies();
  }, []);

    return (
      <>
        <Hero />
        <Movies title="Popular Movies" />
      </>
    );
}

export default Popular;