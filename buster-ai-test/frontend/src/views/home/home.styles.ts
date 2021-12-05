import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  widget: {
    height: '100%',
    width: '100%',
  },
  form: {
      display: 'flex',
      marginTop: theme.spacing(1)
  },
  textField: {
      marginRight: theme.spacing(1)
  },
  creditButton: {
    margin: theme.spacing(1),
  },
}));
