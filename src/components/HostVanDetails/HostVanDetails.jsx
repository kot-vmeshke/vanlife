import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './HostVanDetails.module.css';
const HostVanDetails = () => {
  const { id } = useParams();
  const [vanData, setVanData] = useState({});

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVanData(data.vans);
      });
  }, [id]);

  return (
    <div>
      <div className={styles.container}>
        <Link to="/host/vans" className={styles.backLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none">
            <path
              d="M13.0225 6.65045C13.4038 6.65045 13.713 6.34131 13.713 5.95996C13.713 5.57861 13.4038 5.26947 13.0225 5.26947V6.65045ZM0.574546 5.47171C0.304893 5.74136 0.304893 6.17856 0.574546 6.44821L4.96881 10.8425C5.23846 11.1121 5.67566 11.1121 5.94531 10.8425C6.21496 10.5728 6.21496 10.1356 5.94531 9.86597L2.0393 5.95996L5.94531 2.05395C6.21496 1.7843 6.21496 1.3471 5.94531 1.07745C5.67566 0.807795 5.23846 0.807795 4.96881 1.07745L0.574546 5.47171ZM13.0225 5.26947L1.0628 5.26947V6.65045L13.0225 6.65045V5.26947Z"
              fill="#858585"
            />
          </svg>
          Back to all vans
        </Link>
        {vanData ? (
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <div className={styles.headerImgWrap}>
                <img src={vanData.imageUrl} alt="" />
              </div>
              <div>
                <span className={`${styles.type} ${styles[vanData.type]}`}>
                  {vanData.type}
                </span>
                <h2 className={styles.vanName}>{vanData.name}</h2>
                <p className={styles.vanPrice}>
                  ${vanData.price}
                  <small>/day</small>
                </p>
              </div>
            </div>
            <nav>
              <ul className={styles.nav}>
                <li>
                  <NavLink
                    to={`/host/vans/${id}`}
                    end
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navLink} ${styles.navLinkActive}`
                        : styles.navLink
                    }>
                    Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/host/vans/${id}/pricing`}
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navLink} ${styles.navLinkActive}`
                        : styles.navLink
                    }>
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/host/vans/${id}/photos`}
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navLink} ${styles.navLinkActive}`
                        : styles.navLink
                    }>
                    Photos
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Outlet context={[vanData]}/>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export { HostVanDetails };
