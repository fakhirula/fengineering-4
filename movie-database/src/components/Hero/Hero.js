import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function fetchMovie() {
          const url = 'https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590';

          const response = await fetch(url);
          const data = await response.json();

          setMovie(data);
        }

        fetchMovie()
    }, []);

    return (
      <div className={styles.hero__bg}>
        <div className={styles.hero__bgimage}></div>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.hero__left}>
              <h2 className={styles.hero__title}>{movie.Title}</h2>
              <p className={styles.hero__genre}>{movie.Genre}</p>
              <p className={styles.hero__description}>
                {movie.Plot}
              </p>
              <button className={styles.hero__button}>Watch</button>
            </div>
            <div className={styles.hero__right}>
              <img
                className={styles.hero__image}
                src={movie.Poster}
                alt={movie.Title}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;