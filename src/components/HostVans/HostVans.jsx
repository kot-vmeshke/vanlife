/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './HostVans.module.css';
import { useEffect, useState } from 'react';

const Van = ({ name, price, imageUrl, id }) => {
  return (
    <Link to={`/host/vans/${id}`} className={styles.vanCard}>
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
  const [vansList, setVansList] = useState([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => {
        const { vans } = data;
        setVansList(vans);
      });
  }, []);

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
