import styles from './VansPage.module.css';

import { VanCard } from '../../VanCard/VanCard';
import { useEffect, useState } from 'react';

const VansPage = () => {
  const [vansList, setVansList] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => {
        const { vans } = data;
        setVansList(vans);
      });
  }, []);

  return (
    <div className={styles.vans}>
      <div className={styles.vansContainer}>
        <h2 className={styles.vansTitle}>Explore our van options</h2>
        <ul className={styles.vansControls}>
          <li className={styles.vansFilter}>Simple</li>
          <li className={styles.vansFilter}>Luxury</li>
          <li className={styles.vansFilter}>Rugged</li>
          <li className={styles.vansClearFilter}>Clear filters</li>
        </ul>
        <div className={styles.vansList}>
          {vansList.length &&
            vansList.map((item) => <VanCard key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
};

export { VansPage };
