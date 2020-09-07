import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  appBarButton: {
    color: '#454545',
    marginLeft: 20,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    width: 100,
    '&:hover, &.focus': {
    backgroundColor: '#4bc0c8',
},
},
  appBarIcon: {
    color: '#454545',
    marginTop: 20,
    flexDirection: 'column',
    width: 100,
    '&:hover, &.focus': {
    backgroundColor: '#4bc0c8',
},
},
  fullList: {
    width: 'auto',
  },
  cancel: {
    color: '#454545',
    cursor: 'pointer',
    marginLeft: 200,
    width: 40,
    height: 40,
    '&:hover, &.focus': {
      opacity: '0.6',
    },
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const twitterUrl = 'https://twitter.com/isamudesu_';
  const gitHubUrl = 'https://github.com/isamu-takemoto';

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <CancelIcon className={classes.cancel} />
          <Link to="/" className={classes.link}><Button className={classes.appBarButton} color="inherit">HOME</Button></Link>
          <Link to="/profile" className={classes.link} ><Button className={classes.appBarButton} color="inherit">About me</Button></Link>
          <Link to="/skills" className={classes.link} ><Button className={classes.appBarButton} color="inherit">Skills</Button></Link>
          <Link to="/performance" className={classes.link} ><Button className={classes.appBarButton} color="inherit">Performance</Button></Link>
          <Link to="/contactForm" className={classes.link}><Button className={classes.appBarButton} color="inherit">CONTACT</Button></Link>
          <Button className={classes.appBarIcon} color="inherit" onClick={() => {window.open(twitterUrl);}}><TwitterIcon/></Button>
          <Button className={classes.appBarIcon} color="inherit" onClick={() => {window.open(gitHubUrl);}}><GitHubIcon/></Button>
      </List>
    </div>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer('right', true)} className={classes.drawer}></MenuIcon>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}