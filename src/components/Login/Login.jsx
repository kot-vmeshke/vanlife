/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, Form, useActionData, useNavigation } from 'react-router-dom';
import styles from './Login.module.css';
import { loginUser } from '../../server/api';

export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get('message');
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem('isLoggedIn', true);
    window.location.pathname = '/host';
    console.log(data);
  } catch (e) {
    return e.message;
  }
  return null;
};

export const Login = () => {
  const navigation = useNavigation();

  const errorMessage = useActionData();

  const message = useLoaderData();

  return (
    <div className={styles.loginContainer}>
      {message && <h3>{message}</h3>}
      <h2 className={styles.title}>Sign in to your account</h2>
      {errorMessage && <h3 style={{ color: 'red' }}>{errorMessage}</h3>}
      <Form className={styles.loginForm} method="post" replace>
        <input type="email" name="email" placeholder="Email address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button disabled={navigation.state === 'submiting'}>Sign in</button>
      </Form>
      <p className={styles.createAcc}>
        Don&apos;t have an account? <a href="">Create one now</a>
      </p>
    </div>
  );
};
