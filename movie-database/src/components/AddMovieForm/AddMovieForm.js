import { useState } from "react";
import styles from './AddMovieForm.module.css';
import { nanoid } from 'nanoid';
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
  const { movies, setMovies } = props;
  
  const [isTitleErr, setIsTitleErr] = useState(false);
  const [isDateErr, setIsDateErr] = useState(false);
  const [isPosterErr, setIsPosterErr] = useState(false);
  const [isTypeErr, setIsTypeErr] = useState(false);

  function validate() {
    if (title === '') {
      setIsTitleErr(true);
      return false;
    }
    else if (date === '') {
      setIsDateErr(true);
      setIsTitleErr(false);
      return false;
    }
    else if (poster === '') {
      setIsPosterErr(true);
      setIsDateErr(false);
      return false;
    }
    else {
      setIsTitleErr(false);
      setIsDateErr(false);
      return true;
    }
  }
  
  function addMovie() {
    const newMovie = {
      id: nanoid(10),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };
    
    setMovies([...movies, newMovie]);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    
    validate() && addMovie();
  }
  
  function handleChange(e) {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    poster: '',
    type: '',
  });

  const { title, date, poster, type } = formData;
  
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
                name="title"
                onChange={handleChange}
              />
              {isTitleErr && <Alert>Title wajib diisi</Alert>}
              <label className={styles.form__label} htmlFor="date">
                Year
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                placeholder="Enter movie title"
                value={date}
                name="date"
                onChange={handleChange}
              />
              {isDateErr && <Alert>Date wajib diisi</Alert>}
              <label className={styles.form__label} htmlFor="poster">
                Poster Link
              </label>
              <input
                id="poster"
                className={styles.form__input}
                type="text"
                placeholder="Enter movie title"
                value={poster}
                name="poster"
                onChange={handleChange}
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
                  name="type"
                  onChange={handleChange}
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
