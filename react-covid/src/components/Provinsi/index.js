import styles from './Provinsi.module.css';

function Provinsi(props) {
  return (
    <div className={styles.container}>
      <div className={styles.provinsi}>
        <div>
          <h1 id="provinsi" className={styles.provinsi__title}>
            Provinsi
          </h1>
          <h3 className={styles.provinsi__tagline}>
            Data Covid Berdasarkan Provinsi
          </h3>
        </div>
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>Provinsi</td>
              <td>Positif</td>
              <td>Sembuh</td>
              <td>Dirawat</td>
              <td>Meninggal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aceh</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>DKI Jakarta</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jawa Barat</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Jawa Tengah</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Jawa Timur</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Provinsi;
