import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div>
      <div className={styles.welcome}>
        <div className={styles.container}>
          <h2>Welcome!</h2>
          <div>
            <span>
              Income last
              <b>30 days</b>
            </span>
            <a href="">Details</a>
          </div>
          <div>$2,260</div>
        </div>
      </div>
      <div className={styles.review}>
        <div className={styles.container}>
          <h3>Review score</h3>
          <span>
            5.0<small>/5</small>
          </span>
          <a href="">Details</a>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>Your listed vans</h2>
            <a href="">View All</a>
          </div>
          <div>
            <article>
              <div>
                <img src="/images/modest-explorer.png" alt="" />
              </div>
              <div>
                <h3>Modest Explorer</h3>
                <p>$60/day</p>
              </div>
              <a href="">Edit</a>
            </article>
            <article>
              <div>
                <img src="/images/beach-bum.png" alt="" />
              </div>
              <div>
                <h3>Beach Bum</h3>
                <p>$80/day</p>
              </div>
              <a href="">Edit</a>
            </article>
            <article>
              <div>
                <img src="/images/green-wonder.png" alt="" />
              </div>
              <div>
                <h3>Green Wonder</h3>
                <p>$70/day</p>
              </div>
              <a href="">Edit</a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
