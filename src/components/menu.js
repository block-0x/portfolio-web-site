import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBarButtonMenu: {
      margin: '0 16',
      '&:hover': {
      backgroundColor: '#4bc0c8',
      },
    },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.appBarButtonMenu} color="inherit">
        PORTFOLIO
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <Link to="/profile" className={classes.link} ><MenuItem onClick={handleClose}>About me</MenuItem></Link>
      <Link to="/skills" className={classes.link} ><MenuItem onClick={handleClose}>Skills</MenuItem></Link>
      <Link to="/performance" className={classes.link} ><MenuItem onClick={handleClose}>Performance</MenuItem></Link>
      </Menu>
    </div>
  );
}