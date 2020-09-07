import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ContentTitle from '../components/contentTitle';
import Typography from '@material-ui/core/Typography';
import { Link as MuiLink } from '@material-ui/core';

const useStyles = theme => ({
  contents: {
    marginTop: 30,
    textAlign: 'center',
  },
  text: {
    [theme.breakpoints.down('md')]: {
      fontSize: '0.9rem',
    },
  },
  url: {
    color: '#00acee',
    marginLeft: 5,
    marginRight: 5,
  },
});

const twitterUrl = 'https://twitter.com/isamudesu_';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Contact me',
      subtitle: 'お問い合わせ',
    };
  }

  render() {
    const { classes } = this.props;

    return(
      <section>
        <ContentTitle title={this.state.title} subtitle={this.state.subtitle}/>
        <Container>
          <div className={classes.contents}>
            <Typography className={classes.text}>
              お問い合わせやお仕事のご依頼がありましたら、
            <MuiLink href={twitterUrl} target="_blank" rel="noopener" aria-label="Twitter"  className={classes.url}>
              Twitter
            </MuiLink>
              のダイレクトメッセージにてお問い合わせください。
            </Typography>
          </div>
        </Container>
      </section>
    );
  }
}
  export default withStyles(useStyles)(ContactForm);