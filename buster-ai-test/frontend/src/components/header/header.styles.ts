import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  divider: {
    backgroundColor: theme.palette.text.secondary,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    height: theme.spacing(9),
    backgroundColor: '#ffffff',
    color: theme.palette.text.secondary
  },
  logo : {
    height: theme.spacing(8),
    width: 'auto'
  },
  informationContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoutButton: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary,
    textTransform: 'none'
  }
}));
