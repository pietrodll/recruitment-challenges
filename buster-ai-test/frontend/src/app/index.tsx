import * as React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { PrivateRoute, LoginRoute } from '../components/auth';
import { Header } from '../components/header';
import { useGlobalStyles } from '../styles/global.styles';
import { theme } from '../styles/theme';

import { Home } from '../views/home';
import { Login } from '../views/login';

import { useAuth } from './use-auth';

export const App: React.FC = () => {
  const {
    authenticated,
    email,
    error,
    handleSignup,
    handleLogin,
    handleLogout,
  } = useAuth();

  const classes = useGlobalStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className={classes.appContainer}>
          <Header email={email} onLogout={handleLogout} />
          <div className={classes.pageContainer}>
            <Switch>
              <LoginRoute
                path="/login"
                component={Login}
                authenticated={authenticated}
                onLogin={handleLogin}
                onSignup={handleSignup}
                redirectionPath="/home"
                errorMessage={error}
              />
              <PrivateRoute
                path="/home"
                component={Home}
                onLogout={handleLogout}
                authenticated={authenticated}
                fallbackPath="/login"
              />
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};
