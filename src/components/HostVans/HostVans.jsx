import styles from './HostVans.module.css';

const HostVans = () => {
  return (
    <div className={styles.vans}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your listed vans</h2>
        </div>
        <div className={styles.vansContainer}>
          <article className={styles.vanCard}>
            <div className={styles.vanImgWrap}>
              <img src="/images/modest-explorer.png" alt="" />
            </div>
            <div>
              <h3 className={styles.vanCardTitle}>Modest Explorer</h3>
              <p className={styles.vanCardPrice}>$60/day</p>
            </div>
          </article>
          <article className={styles.vanCard}>
            <div className={styles.vanImgWrap}>
              <img src="/images/beach-bum.png" alt="" />
            </div>
            <div>
              <h3 className={styles.vanCardTitle}>Beach Bum</h3>
              <p className={styles.vanCardPrice}>$80/day</p>
            </div>
          </article>
          <article className={styles.vanCard}>
            <div className={styles.vanImgWrap}>
              <img src="/images/green-wonder.png" alt="" />
            </div>
            <div>
              <h3 className={styles.vanCardTitle}>Green Wonder</h3>
              <p className={styles.vanCardPrice}>$70/day</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export { HostVans };
