import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        #VANLIFE
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/host" className={styles.navLink}>
          Host
        </NavLink>
        <NavLink to="/about" className={styles.navLink}>
          About
        </NavLink>
        <NavLink to="/vans" className={styles.navLink}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export {Header};
