import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.homeTitle}>
        You got the travel plans, we got the travel vans.
      </h1>
      <p className={styles.homeSubtitle}>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="vans" className={styles.homeLink}>Find your van</Link>
    </div>
  );
};

export { HomePage };
