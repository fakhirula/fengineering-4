import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';
import AddMovieForm from '../components/AddMovieForm/AddMovieForm';
import data from '../utils/constants/data';
import { useState } from 'react';

function Main() {
  const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
