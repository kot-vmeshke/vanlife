/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './VanCard.module.css';

const VanCard = ({ name, type, price, imageUrl, id, state }) => {
  return (
    <Link to={id} className={styles.van} state={state}>
      <div className={styles.vanImgWrapper}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.vanDataWrapper}>
        <h3 className={styles.vanName}>{name}</h3>
        <span className={`${styles.vanCategory} ${styles[type]}`}>{type}</span>
        <span className={styles.vanPrice}>
          ${price}
          <small>/day</small>
        </span>
      </div>
    </Link>
  );
};
export { VanCard };
