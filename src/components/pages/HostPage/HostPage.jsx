import styles from './HostPage.module.css';

import { NavLink, Outlet } from 'react-router-dom';

const HostPage = () => {
  return (
    <div>
      <nav className={styles.navContainer}>
        <ul className={styles.nav}>
          <li>
            <NavLink to="/host" className={styles.navLink}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/host/income" className={styles.navLink}>
              Income
            </NavLink>
          </li>
          <li>
            <NavLink to="/host/vans" className={styles.navLink}>
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink to="/host/reviews" className={styles.navLink}>
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
