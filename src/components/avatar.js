import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  Avatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
});

export default function ImageAvatar() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="my picture" src="images/myPic.jpg" className={classes.Avatar} />
    </Grid>
  );
}