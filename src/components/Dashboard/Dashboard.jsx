import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.welcome}>
        <div className={styles.container}>
          <h2 className={styles.welcomeTitle}>Welcome!</h2>
          <div className={styles.welcomeWrap}>
            <span className={styles.welcomeIncome}>
              Income last <b>30 days</b>
            </span>
            <Link to="/host/income" className={styles.navLink}>
              Details
            </Link>
          </div>
          <div className={styles.welcomePrice}>$2,260</div>
        </div>
      </div>
      <div className={styles.review}>
        <div className={`${styles.container} ${styles.reviewContainer}`}>
          <h3 className={styles.reviewTitle}>Review score</h3>
          <span className={styles.reviewRate}>
            5.0<small>/5</small>
          </span>
          <Link to="/host/reviews" className={styles.navLink}>
            Details
          </Link>
        </div>
      </div>
      <div className={styles.vans}>
        <div className={styles.container}>
          <div className={styles.vansHeader}>
            <h2 className={styles.vansTitle}>Your listed vans</h2>
            <Link to="/host/vans" className={styles.navLink}>
              View All
            </Link>
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
              <a href="" className={styles.navLink}>
                Edit
              </a>
            </article>
            <article className={styles.vanCard}>
              <div className={styles.vanImgWrap}>
                <img src="/images/beach-bum.png" alt="" />
              </div>
              <div>
                <h3 className={styles.vanCardTitle}>Beach Bum</h3>
                <p className={styles.vanCardPrice}>$80/day</p>
              </div>
              <a href="" className={styles.navLink}>
                Edit
              </a>
            </article>
            <article className={styles.vanCard}>
              <div className={styles.vanImgWrap}>
                <img src="/images/green-wonder.png" alt="" />
              </div>
              <div>
                <h3 className={styles.vanCardTitle}>Green Wonder</h3>
                <p className={styles.vanCardPrice}>$70/day</p>
              </div>
              <a href="" className={styles.navLink}>
                Edit
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
