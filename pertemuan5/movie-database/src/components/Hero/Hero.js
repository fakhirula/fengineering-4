import styles from "./Hero.module.css";

function Hero() {
    return (
      <div className={styles.hero__bg}>
        <div className={styles.hero__bgimage}></div>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.hero__left}>
              <h2 className={styles.hero__title}>Spiderman</h2>
              <p className={styles.hero__genre}>Action, Drama</p>
              <p className={styles.hero__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda distinctio necessitatibus placeat tenetur aut et
                facilis ducimus rem quis aliquid!
              </p>
              <button className={styles.hero__button}>Watch</button>
            </div>
            <div className={styles.hero__right}>
              <img
                className={styles.hero__image}
                src="https://picsum.photos/536/354"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;