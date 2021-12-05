import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTextField-root, .MuiFormControlLabel-root': {
      marginBottom: theme.spacing(1),
    },
    '& .MuiTextField-root:last-child, .MuiFormControlLabel-root:last-child': {
      marginBottom: 0,
    },
  },
}));
