import styles from './Global.module.css';

function Global(props) {
  return (
    <div className={styles.container}>
      <div className={styles.global}>
        <div>
          <h1 id="global" className={styles.global__brand}>
            {props.title}
          </h1>
          <h3 className={styles.global__title}>
            Data Covid Berdasarkan Global
          </h3>
        </div>
        <div className={styles.global__card}></div>
      </div>
    </div>
  );
}

export default Global;
