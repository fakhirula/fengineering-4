import styles from './AddMovieForm.module.css';

function AddMovieForm() {
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
          <div>
            <label className={styles.form__label} htmlFor="">Title</label>
            <input className={styles.form__input} type="text" placeholder="Enter movie title" />
            <label className={styles.form__label} htmlFor="">Year</label>
            <input className={styles.form__input} type="text" placeholder="Enter movie year" />
          </div>
          <button className={styles.form__button}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddMovieForm;
