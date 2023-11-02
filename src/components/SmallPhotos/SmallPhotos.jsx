import styles from './SmallPhotos.module.css';

const SmallPhotos = () => {
  return (
    <div className={styles.smallPhotos}>
      <div className={styles.imgWrap}>
        <img src="/images/modest-explorer.png" alt="" />
      </div>
    </div>
  );
};

export { SmallPhotos };
