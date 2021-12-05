import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import FibCalcLogo from '../../assets/fibcalc-logo.png';
import { DateTimeDisplay } from '../date-time-display';

import { useStyles } from './header.styles';

interface HeaderProps {
  email: string | null;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ email, onLogout }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Link to="/home">
        <img src={FibCalcLogo} alt="FibCalc Logo" className={classes.logo} />
      </Link>
      <div className={classes.informationContainer}>
        <DateTimeDisplay />
        {email && (
          <>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
            <div className={classes.nameContainer}>
              <AccountCircleOutlinedIcon style={{ marginRight: '10px' }} />
              <div>{email}</div>
            </div>
            <Button onClick={onLogout} className={classes.logoutButton}>
              Logout
            </Button>
          </>
        )}
      </div>
    </AppBar>
  );
};
