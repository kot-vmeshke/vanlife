import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        #VANLIFE
      </Link>
      <nav className={styles.nav}>
        <NavLink
          to="host"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }>
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }>
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }>
          Vans
        </NavLink>
        <NavLink
          to="login"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }>
          <img src="images/user-circle.svg" alt="" width={24} />
        </NavLink>
        <button
          className={styles.logout}
          onClick={() => localStorage.removeItem('isLoggedIn')}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export { Header };
