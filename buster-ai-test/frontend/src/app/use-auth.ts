import { useState, useEffect } from 'react';

import api from '../services/api';

export const useAuth = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    api.checkToken().then(mail => setEmail(mail));
  }, []);

  const handleLogin = (email: string, password: string) => {
    api
      .login(email, password)
      .then(() => {
        setEmail(email);
        setError(undefined);
      })
      .catch(err => {
        setEmail(null);
        setError(err.response.data.message);
      });
  };

  const handleSignup = (email: string, password: string) => {
    api
      .signup(email, password)
      .then(() => {
        setEmail(email);
        setError(undefined);
      })
      .catch(err => {
        setEmail(null);
        setError(err.response.data.message);
      });
  };

  const handleLogout = () => {
    setEmail(null);
    setError(undefined);
  };

  return {
    authenticated: typeof email === 'string',
    email,
    error,
    handleLogin,
    handleSignup,
    handleLogout,
  };
};
