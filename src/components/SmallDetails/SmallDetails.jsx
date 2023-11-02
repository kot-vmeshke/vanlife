import styles from './SmallDetails.module.css';

const SmallDetails = () => {
  return (
    <div className={styles.smallDetails}>
      <p>
        <b>Name:</b> Modest Explorer
      </p>
      <p>
        <b>Category:</b> Simple
      </p>
      <p>
        <b>Description:</b> The Modest Explorer is a van designed to get you out
        of the house and into nature. This beauty is equipped with solar panels,
        a composting toilet, a water tank and kitchenette. The idea is that you
        can pack up your home and escape for a weekend or even longer!
      </p>
      <p>
        <b>Visibility:</b> Public
      </p>
    </div>
  );
};

export { SmallDetails };
