import { useOutletContext } from 'react-router-dom';
import styles from './SmallPricing.module.css';

const SmallPricing = () => {
  const { vanData } = useOutletContext();
  return (
    <p className={styles.smallPricing}>
      ${vanData.price}<small>/day</small>
    </p>
  );
};

export { SmallPricing };
