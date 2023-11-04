import styles from './HostPage.module.css';

import { NavLink, Outlet } from 'react-router-dom';

const HostPage = () => {
  return (
    <div className={styles.hostPage}>
      <nav className={styles.navContainer}>
        <ul className={styles.nav}>
          <li>
            <NavLink
              to="/host"
              end
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/income"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }>
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/vans"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }>
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/reviews"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }>
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export { HostPage };
