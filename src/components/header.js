import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SimpleMenu from './menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import TemporaryDrawer from './drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#454545',
  },
  title: {
    flexGrow: 1,
    fontSize: 18,
    marginLeft: 24,
  },
  appBarButton: {
    margin: '0 16',
    '&:hover, &.focus': {
    backgroundColor: '#4bc0c8',
  },
  },
  link: {
      color: 'inherit',
      textDecoration: 'none',
  },
  item: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const facebookUrl = 'https://www.facebook.com/profile.php?id=100006804640814';
  const wantedlyUrl = 'https://www.wantedly.com/users/90816883';
  const qiitaUrl = 'https://qiita.com/___xxx_';
  const twitterUrl = 'https://twitter.com/isamudesu_';
  const githubUrl = 'https://github.com/maki-iida';
  
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Portfolio
          </Typography>
           <TemporaryDrawer />
           <div className={classes.item}>
             {/* <Link to="/" className={classes.link}><Button className={classes.appBarButton} color="inherit">HOME</Button></Link> */}
             <SimpleMenu />
             {/* <Link to="/contactForm" className={classes.link}><Button className={classes.appBarButton} color="inherit">CONTACT</Button></Link> */}
             <Button className={classes.appBarButton} color="inherit" onClick={() => {window.open(qiitaUrl);}}>Qiita</Button>
             <Button className={classes.appBarButton} color="inherit" onClick={() => {window.open(wantedlyUrl);}}>Wantedly</Button>
             <Button className={classes.appBarButton} color="inherit" onClick={() => {window.open(facebookUrl);}}><FacebookIcon/></Button>
             {/* <Button className={classes.appBarButton} color="inherit" onClick={() => {window.open(twitterUrl);}}><TwitterIcon/></Button> */}
             <Button className={classes.appBarButton} color="inherit" onClick={() => {window.open(githubUrl);}}><GitHubIcon/></Button>
           </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}