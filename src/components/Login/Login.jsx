import styles from './Login.module.css';

export const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Sign in to your account</h2>
      <form action="" className={styles.loginForm}>
        <input type="email" placeholder="Email address" required/>
        <input type="password" placeholder="Password" required/>
        <button>Sign in</button>
      </form>
      <p className={styles.createAcc}>
        Don&apos;t have an account? <a href="">Create one now</a>
      </p>
    </div>
  );
};
