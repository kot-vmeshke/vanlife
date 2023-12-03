import { redirect } from 'react-router-dom';

export const requireAuth = async () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const response = redirect('/login?message=You must log in first');

  if (!isLoggedIn) {
    return Object.defineProperty(response, 'body', { value: true });
  }

  return null;
};
