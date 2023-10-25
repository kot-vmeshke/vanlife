import styles from './HostPage.module.css';

import { NavLink, Outlet } from 'react-router-dom';

const HostPage = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <NavLink to="/host">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/host/income">Income</NavLink>
          </li>
          <li>
            <NavLink to="/host/vans">Vans</NavLink>
          </li>
          <li>
            <NavLink to="/host/reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
};

export { HostPage };
