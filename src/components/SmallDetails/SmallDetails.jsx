import { useOutletContext } from 'react-router-dom';
import styles from './SmallDetails.module.css';

const SmallDetails = () => {
  const { vanData } = useOutletContext();
  return (
    <div className={styles.smallDetails}>
      <p>
        <b>Name:</b> {vanData.name}
      </p>
      <p>
        <b>Category:</b> {vanData.type}
      </p>
      <p>
        <b>Description:</b> {vanData.description}
      </p>
      <p>
        <b>Visibility:</b> Public
      </p>
    </div>
  );
};

export { SmallDetails };
