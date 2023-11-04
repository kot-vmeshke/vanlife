import { useOutletContext } from 'react-router-dom';
import styles from './SmallPhotos.module.css';

const SmallPhotos = () => {
  const { vanData } = useOutletContext();
  return (
    <div className={styles.smallPhotos}>
      <div className={styles.imgWrap}>
        <img src={vanData.imageUrl} alt="" />
      </div>
    </div>
  );
};

export { SmallPhotos };
