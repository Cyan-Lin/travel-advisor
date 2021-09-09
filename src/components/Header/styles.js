import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.info.dark,

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  title: {
    display: 'block',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    // spacing default 8px
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(3),
    width: 'auto',

    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      width: '100%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // root => placeHolder
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: { width: '20ch' },
  },
}));
