import Assets from '../Assets/img/logo.png';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h4 className={styles.hero__tagline}>Monitoring Perkembangan Covid-19</h4>
          <h4 className={styles.hero__desc}>
            Introducing a Covid monitoring application built using the React-js
            library<br></br>
            This application is designed to assist the public in monitoring the
            progress of Covid and hopefully prove to be beneficial.
          </h4>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.hero__image} src={Assets} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
