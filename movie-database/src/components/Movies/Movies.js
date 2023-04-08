import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// Import data movies
import { nanoid } from "nanoid"

function Movies(props) {
  // Membuat variable state movies
  const { movies, setMovies } = props;

  function addFilm() {
    const movie = {
      id: nanoid(10),
      title: "Spiral Jigsaw",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400"
    };
    
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movies__container}>
          
          {/* 1. Looping data movies dgn map
              2. Render Component Movie
              3. Kirim props movie
          */}
          {
            movies.map(function (movie) {
              return <Movie key={movie.id} movie={movie} />;
            })
          }
        </div>
        <button onClick={addFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;