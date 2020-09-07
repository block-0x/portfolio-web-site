import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 64,
        backgroundColor: '#f7fcfd',
        height: 200,
      },
      contentTitle: {
        fontWeight: 700,
        letterSpacing: theme.spacing(0.5),
        marginBottom: 8,
        fontSize: 28,
        color: '#666',

      },
      contentText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#999',
        '& > p': {
          margin: 0,
        },
      },
  }));

function ContentTitle(props) {
  const classes = useStyles();

  return (
    <section>
      <div className={classes.content}>
        <div className={classes.contentText}>
          <Typography className={classes.contentTitle}>
            {props.title}
          </Typography>
            <p>{props.subtitle}</p>
        </div>
      </div>
    </section>
  );
}

export default ContentTitle;
