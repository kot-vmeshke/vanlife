import styles from './Reviews.module.css';
const Reviews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Your reviews</h2>
        <p className={styles.time}>
          last <span>30 days</span>
        </p>
      </div>
      <div className={styles.ratingImageWrap}>
        <img src="/images/reviews.svg" alt="" />
      </div>
      <div>
        <h3 className={styles.reviewsTitle}>Reviews (2)</h3>
        <div>
          <div className={styles.review}>
            <div className={styles.reviewStars}>
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
            </div>
            <div className={styles.reviewAuthor}>
              <p className={styles.reviewAuthorName}>Elliot</p>
              <p className={styles.reviewDate}>December 1, 2022</p>
            </div>
            <p className={styles.reviewText}>
              The beach bum is such as awesome van! Such as comfortable trip. We
              had it for 2 weeks and there was not a single issue. Super clean
              when we picked it up and the host is very comfortable and
              understanding. Highly recommend!
            </p>
          </div>
          <div className={styles.review}>
            <div className={styles.reviewStars}>
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
            </div>
            <div className={styles.reviewAuthor}>
              <p className={styles.reviewAuthorName}>Sandy</p>
              <p className={styles.reviewDate}>November 23, 2022</p>
            </div>
            <p className={styles.reviewText}>
              This is our third time using the Modest Explorer for our travels
              and we love it! No complaints, absolutely perfect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Reviews };
