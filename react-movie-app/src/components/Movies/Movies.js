import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

import { useSelector } from "react-redux";

function Movies(props) {
  // Membuat variable state movies
  const { title } = props;

  const movies = useSelector((store) => store.movies.movies);

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movies__container}>
          {
            movies.map(function (movie) {
              return <Movie key={movie.id} movie={movie} />;
            })
          }
        </div>
      </section>
    </div>
  );
}

export default Movies;