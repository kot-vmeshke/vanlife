import styles from './VansPage.module.css';

import { VanCard } from '../../VanCard/VanCard';
import { useSearchParams, useLoaderData } from 'react-router-dom';

import { getVans } from '../../../server/api';

export const loader = () => {
  return getVans();
};

export const VansPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const vansList = useLoaderData();

  const vansFiltered = typeFilter
    ? vansList.filter(
        (item) => item.type.toLowerCase() === typeFilter.toLowerCase()
      )
    : vansList;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className={styles.vans}>
      <div className={styles.vansContainer}>
        <h2 className={styles.vansTitle}>Explore our van options</h2>
        <ul className={styles.vansControls}>
          <button
            onClick={() => handleFilterChange('type', 'simple')}
            className={`${styles.vansFilter} ${styles.simple} ${
              typeFilter === 'simple' ? styles.selected : null
            }`}>
            Simple
          </button>
          <button
            onClick={() => handleFilterChange('type', 'luxury')}
            className={`${styles.vansFilter} ${styles.luxury} ${
              typeFilter === 'luxury' ? styles.selected : null
            }`}>
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange('type', 'rugged')}
            className={`${styles.vansFilter} ${styles.rugged} ${
              typeFilter === 'rugged' ? styles.selected : null
            }`}>
            Rugged
          </button>
          {typeFilter && (
            <button
              onClick={() => handleFilterChange('type', null)}
              className={styles.vansClearFilter}>
              Clear filters
            </button>
          )}
        </ul>
        <div className={styles.vansList}>
          {vansFiltered.length ? (
            vansFiltered.map((item) => (
              <VanCard
                key={item.id}
                {...item}
                state={{ search: searchParams.toString(), type: typeFilter }}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
