import * as React from 'react';
import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { PrivateComponentProps } from '../../components/auth';
import { useGlobalStyles } from '../../styles/global.styles';

import { useStyles } from './home.styles';
import { useHome } from './use-home';

export const Home: React.FC<PrivateComponentProps> = () => {
  const {
    credit,
    index,
    fibonacci,
    handleAddCredit,
    handleSubmit,
    handleChangeIndex,
  } = useHome();

  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div className={globalClasses.sectionContainer}>
      <Grid container spacing={3}>
        <Grid item md={6} sm={12}>
          <div className={clsx(globalClasses.widgetContainer, classes.widget)}>
            <Typography variant="body1">
              Type an index to get the corresponding Fibonacci number!
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                className={classes.textField}
                variant="outlined"
                type="number"
                value={index}
                onChange={handleChangeIndex}
              />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
            {typeof fibonacci === 'number' && (
              <Typography>Result: {fibonacci}</Typography>
            )}
          </div>
        </Grid>
        <Grid item md={6} sm={12}>
          <div className={clsx(globalClasses.widgetContainer, classes.widget)}>
            <Typography>You have {credit} credits left</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddCredit(10)}
              className={classes.creditButton}
            >
              Add 10 credits
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddCredit(1)}
              className={classes.creditButton}
            >
              Add 1 credit
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
