import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Performance from './performance';


const useStyles = makeStyles(theme => ({
  contents: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '100 0',
    height: '100vh',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
    },
  },
  home: {
    backgroundColor:'#ffffff',
  },
  button: {
    color: '#4bc0c8',
    backgroundColor: '#fff',
    margin: 8,
    border: '1px solid rgba(75, 192, 200, 0.5)',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
    '&:hover': {
      border: '1px solid #4bc0c8',
      backgroundColor: '#fff',
},
  },
  topTitle: {
    fontWeight: 800,
    letterSpacing: 4,
    color: '#333333',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      fontWeight: 900,
      fontSize: '2rem',
    },
  },
  topText: {
    textAlign: 'center',
  },
  subText: {
    color: '#999',
    margin: '14 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  link: {
      color: 'inherit',
      textDecoration: 'none',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <section className={classes.home}>
      <Container maxWidth="md" className={classes.contents}>
        <div className={classes.topText}>
          <Typography component="h2" className={classes.topTitle} >
            Portfolio
          </Typography>
          <p className={classes.subText}>
              22歳のときに、ホームレスをしながらプログラミングスクールに通いました。
              <br />
              <br />
              その後、早稲田大学生と2人起業を経験。現在はIT教育系アプリのプロダクトオーナーをやらさせいただいています。
          </p>
        </div>
        <Performance />
      </Container>
    </section>
  );
}

export default Home;
