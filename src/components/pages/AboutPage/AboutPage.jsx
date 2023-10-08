import { Link } from "react-router-dom";

import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutImgWrap}>
        <img src="/images/about-img.png" alt="" />
      </div>
      <div className={styles.aboutContentWrap}>
        <h2 className={styles.aboutTitle}>
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className={styles.aboutText}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className={styles.aboutText}>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className={styles.aboutOfferWrap}>
          <p className={styles.aboutOfferText}>
            Your destination is waiting.<br/>
            Your van is ready.
          </p>
          <Link to="/vans" className={styles.aboutOfferLink}>
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
};

export { AboutPage };
