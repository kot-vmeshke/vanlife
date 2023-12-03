/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link, useLoaderData } from 'react-router-dom';
import styles from './HostVans.module.css';
import { getHostVans } from '../../server/api';
import { requireAuth } from '../../utils/utils';

export const loader = async () => {
  await requireAuth();
  return getHostVans();
}

const Van = ({ name, price, imageUrl, id }) => {
  return (
    <Link to={id} className={styles.vanCard}>
      <div className={styles.vanImgWrap}>
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <h3 className={styles.vanCardTitle}>{name}</h3>
        <p className={styles.vanCardPrice}>${price}/day</p>
      </div>
    </Link>
  );
};

const HostVans = () => {
  const vansList = useLoaderData();
  console.log(vansList);

  return (
    <div className={styles.vans}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your listed vans</h2>
        </div>
        <div className={styles.vansContainer}>
          {vansList.length ? (
            vansList.map((item) => <Van key={item.id} {...item} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { HostVans };
