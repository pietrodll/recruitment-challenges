import { makeStyles } from '@material-ui/core/styles';

export const useGlobalStyles = makeStyles(theme => ({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    minHeight: '100vh',
    justifyContent: 'start',
  },
  pageContainer: {
    marginTop: theme.spacing(11),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },
  sectionContainer: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
    backgroundColor: theme.palette.background.paper,
  },
  widgetContainer: {
    borderRadius: theme.spacing(1.25),
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0 0 ${theme.spacing(1.25)}px 0 rgba(0, 0, 0, 0.2)`,
  },
}));
