import styles from './Login.module.css';
import { useState } from 'react';

export const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Sign in to your account</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          onChange={handleChange}
          value={loginFormData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          value={loginFormData.password}
        />
        <button>Sign in</button>
      </form>
      <p className={styles.createAcc}>
        Don&apos;t have an account? <a href="">Create one now</a>
      </p>
    </div>
  );
};
