import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <p>Sorry, the page you were looking for was not found.</p>
      <Link className={styles.backlink} to="/">Return to home</Link>
    </div>
  );
}

