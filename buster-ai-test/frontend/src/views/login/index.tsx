import * as React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

import { LoginComponentProps } from '../../components/auth';
import { useGlobalStyles } from '../../styles/global.styles';

import { useLogin } from './use-login';
import { useStyles } from './login.styles';

export const Login: React.FC<LoginComponentProps> = props => {
  const {
    email,
    password,
    confirmPassword,
    newUser,
    handleChangeEmail,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleChangeNewUser,
    handleSubmit,
  } = useLogin(props);

  const globalClasses = useGlobalStyles();
  const classes = useStyles();

  return (
    <div className={globalClasses.sectionContainer}>
      <Typography variant="h2" component="h1" className={classes.title}>
        Welcome to FibCalc!
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container justify="center">
          <Grid item xs={12} sm={6} lg={4} container direction="column">
            <TextField
              value={email}
              label="Email"
              onChange={handleChangeEmail}
            />
            <TextField
              type="password"
              value={password}
              label="Password"
              onChange={handleChangePassword}
            />
            {newUser && (
              <TextField
                type="password"
                value={confirmPassword}
                label="Confirm Password"
                onChange={handleChangeConfirmPassword}
                error={confirmPassword !== password}
                helperText={
                  confirmPassword !== password && "Passwords don't match"
                }
              />
            )}
            <FormControlLabel
              control={
                <Checkbox checked={newUser} onChange={handleChangeNewUser} />
              }
              label="Are you a new user?"
            />
            <Button
              type="submit"
              disabled={newUser && password !== confirmPassword}
            >
              {newUser ? 'Create account!' : 'Login'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
