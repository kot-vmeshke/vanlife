import styles from './SmallPricing.module.css';

const SmallPricing = () => {
  return (
    <p className={styles.smallPricing}>
      $60.00<small>/day</small>
    </p>
  );
};

export { SmallPricing };
