import { useState } from "react";
import styles from './AddMovieForm.module.css';
import { nanoid } from 'nanoid';
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
  const { movies, setMovies } = props;

  const [title, setTitle] = useState('');
  const [isTitleErr, setIsTitleErr] = useState(false);
  const [date, setDate] = useState('');
  const [isDateErr, setIsDateErr] = useState(false);
  const [poster, setPoster] = useState('');
  const [isPosterErr, setIsPosterErr] = useState(false);
  const [type, setType] = useState('');
  const [isTypeErr, setIsTypeErr] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();

    if (title === '') {
      setIsTitleErr(true);
      return;
    }

    if (date === '') {
      setIsDateErr(true);
      return;
    }

    if (poster === '') {
      setIsPosterErr(true);
      return;
    }

    if (type === '') {
      setIsTypeErr(true);
      return;
    }

    const newMovie = {
      id: nanoid(10),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    setMovies([...movies, newMovie]);
    setTitle('');
    setDate('');
    setPoster('');
    setType('');
    setIsTitleErr(false);
    setIsDateErr(false);
    setIsPosterErr(false);
    setIsTypeErr(false);
  };

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handlePoster(e) {
    setPoster(e.target.value);
  }

  function handleType(e) {
    setType(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h3 className={styles.form__title}>Add Movie</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label className={styles.form__label} htmlFor="title">
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                placeholder="Enter movie title"
                value={title}
                onChange={handleTitle}
              />
              {isTitleErr && <Alert>Title wajib diisi</Alert>}
              <label className={styles.form__label} htmlFor="date">
                Year
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                placeholder="Enter movie year"
                value={date}
                onChange={handleDate}
              />
              {isDateErr && <Alert>Date wajib diisi</Alert>}
              <label className={styles.form__label} htmlFor="poster">
                Poster Link
              </label>
              <input
                id="poster"
                className={styles.form__input}
                type="url"
                placeholder="Enter poster url"
                value={poster}
                onChange={handlePoster}
              />
              {isPosterErr && <Alert>Poster wajib diisi</Alert>}
              <label className={styles.form__label} htmlFor="type">
                Type Movie
              </label>
              <select
                id="type"
                className={styles.form__input}
                type="url"
                placeholder="Enter movie type"
                value={type}
                onChange={handleType}
              >
                <option value="">-- Select one --</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
              </select>
              {isTypeErr && <Alert>Type wajib diisi</Alert>}
            </div>
            <button className={styles.form__button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMovieForm;
