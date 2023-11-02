import styles from './Income.module.css';

const Income = () => {
  return (
    <div className={styles.income}>
      <h2 className={styles.incomeTitle}>Income</h2>
      <p className={styles.incomeTime}>
        Last <span>30 days</span>
      </p>
      <p className={styles.incomePrice}>$2,260</p>
      <div className={styles.incomeChart}>
        <img src="/images/income-chart.svg" alt="" />
      </div>
      <div>
        <div className={styles.transactionsHeader}>
          <h3 className={styles.incomeSubtitle}>Your transactions (3)</h3>
          <p className={styles.incomeTime}>
            Last <span>30 days</span>
          </p>
        </div>
        <div className={styles.transactionsWrap}>
          <div className={styles.transaction}>
            <p className={styles.transactionPrice}>$720</p>
            <p className={styles.transactionDate}>1/12/22</p>
          </div>
          <div className={styles.transaction}>
            <p className={styles.transactionPrice}>$560</p>
            <p className={styles.transactionDate}>10/11/22</p>
          </div>
          <div className={styles.transaction}>
            <p className={styles.transactionPrice}>$980</p>
            <p className={styles.transactionDate}>23/11/22</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Income}
