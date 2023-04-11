import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <h2>Covid ID</h2>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>Global</li>
            <li className={styles.navbar__item}>Indonesia</li>
            <li className={styles.navbar__item}>Provinsi</li>
            <li className={styles.navbar__item}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
