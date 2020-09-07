import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ContentTitle from '../components/contentTitle';
import SimpleRating from '../components/rating';
import RatingBig from '../components/ratingBig';

const useStyles = theme => ({
  contents: {
    display: 'flex',
    height: 430,
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
    },
  },
  skillsImage: {
    display: 'block',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 350,
      height: 200,
    },
  },
  front: {
    width: 650,
    boxShadow:'0 1px 4px 1px rgba(0, 0, 0, 0.1)',
    height: 400,
    borderRadius: 8,
    marginRight: 30,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      marginTop: 20,
      margin: '0 auto',
    },
  },
  back: {
    width: 650,
    boxShadow:'0 1px 4px 1px rgba(0, 0, 0, 0.1)',
    height: 400,
    borderRadius: 8,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      marginTop: 20,
      margin: '0 auto',
    },
  },
  contentsTitle: {
    color: '#666666',
    fontSize: '1.6rem',
    textAlign: 'center',
    marginTop: 10,
    letterSpacing: 3,
  },
  content: {
    width: 460,
    display:'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
  },
  skill: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      opacity: '0.8',
      transform: 'translateY(-1em)',
      transition: 'transform 0.3s ease-in-out',
    },
    [theme.breakpoints.down('sm')]: {
      width: 70,
      height: 100,
      marginTop: 40,
    },
  },
  icon: {
    fontSize: 85,
  },
  svg: {
    fontSize: 85,
  },
  guide: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    width: 460,
  },
  rate: {
    marginBottom: 12,
  },
  guideText: {
    color: '#666666',
    fontSize: '1.0rem',
  },
});

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Skills',
      subtitle: 'できること',
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <section>
        <ContentTitle title={this.state.title} subtitle={this.state.subtitle}/>
        <Container>
          <img src="./images/skills.png" alt="skillsImage" className={classes.skillsImage} width="690px" height="410px" />
          <div className={classes.contents}>
            <div className={classes.front}>
              <div className={classes.contentsTitle}>
                Front-Skills
              </div>
              <div className={classes.content}>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-html5-plain-wordmark colored"></i>
                  </div>
                  <SimpleRating rate='3' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-css3-plain-wordmark colored"></i>
                  </div>
                  <SimpleRating rate='3' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-javascript-plain colored"></i>
                  </div>
                  <SimpleRating rate='3' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-bootstrap-plain-wordmark colored"></i>
                  </div>
                  <SimpleRating rate='2' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-react-original-wordmark colored"></i>
                  </div>
                  <SimpleRating rate='3' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.svg}>
                    <svg viewBox="0 0 128 128" width="75px" height="75px">
                      <path fill="none" d="M0 0h128v128H0z"></path><path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.12 9.12 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z" fill="#764abc"></path>
                    </svg>
                  </div>
                  <SimpleRating rate='2' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-typescript-plain colored"></i>
                  </div>
                  <SimpleRating rate='2' />
                </div>
                <div className={classes.skill}>
                  <div>
                    <img src="./images/reactN.png" alt="React Native" width="88px" height="98px" />
                  </div>
                  <SimpleRating rate='2' />
                </div>
              </div>
            </div>
            <div className={classes.back}>
              <div className={classes.contentsTitle}>
              back-Skills
              </div>
              <div className={classes.content}>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-csharp-plain-wordmark colored"></i>
                  </div>
                  <SimpleRating rate='3' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-php-plain colored"></i>
                  </div>
                  <SimpleRating rate='1' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <img src="./images/netF.png" alt=".NET Framework" width="78px" height="78px" />
                  </div>
                  <SimpleRating rate='3' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-laravel-plain-wordmark colored"></i>
                  </div>
                  <SimpleRating rate='1' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-oracle-original colored"></i>
                  </div>
                  <SimpleRating rate='3' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <img src="./images/fB.png" alt="firebase" width="85px" height="78px" />
                  </div>
                  <SimpleRating rate='2' />
                </div>
              </div>
            </div> 
          </div>
          <div className={classes.contents}>
            <div className={classes.front}>
              <div className={classes.contentsTitle}>
                Other-Skills
              </div>
              <div className={classes.content}>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-git-plain-wordmark colored"></i>
                  </div>
                  <SimpleRating rate='2' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-github-plain-wordmark colored"></i>
                  </div>
                  <SimpleRating rate='2' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <img src="./images/svn.png" alt="React Native" width="85px" height="75px" />
                  </div>
                  <SimpleRating rate='3' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-wordpress-plain-wordmark colored"></i>
                  </div>
                  <SimpleRating rate='3' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-sketch-line-wordmark colored"></i>
                  </div>
                  <SimpleRating rate='2' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-photoshop-line colored"></i>
                  </div>
                  <SimpleRating rate='2' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                    <i class="devicon-slack-plain-wordmark colored"></i>
                  </div>
                  <SimpleRating rate='3' />
                </div>
                <div className={classes.skill}>
                  <div className={classes.icon}>
                  <img src="./images/bL.jpg" alt="BackLog" width="80px" height="80px" />
                  </div>
                  <SimpleRating rate='3' />
                </div>
              </div>
            </div>
            <div className={classes.back}>
              <div className={classes.contentsTitle}>
                Guide
              </div>
              <div className={classes.content}>
                <div className={classes.guide}>
                  <div className={classes.rate}>
                    <RatingBig rate='5' />
                    <span className={classes.guideText}>
                      あらゆる技術を熟知している神
                    </span>
                  </div>
                  <div className={classes.rate}>
                    <RatingBig rate='4' />
                    <span className={classes.guideText}>
                      他者に技術指導できる
                    </span>
                  </div>
                  <div className={classes.rate}>
                    <RatingBig rate='3' />
                    <span className={classes.guideText}>
                      実務レベルで自由に駆使できる
                    </span>
                  </div>
                  <div className={classes.rate}>
                    <RatingBig rate='2' />
                    <span className={classes.guideText}>
                      実務で数ヶ月以上使用しているがもう少し習熟が必要
                    </span>
                  </div>
                  <div className={classes.rate}>
                    <RatingBig rate='1' />
                    <span className={classes.guideText}>
                      軽く使用した程度
                    </span>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </Container>
      </section>
    );
  }
}

export default withStyles(useStyles)(Skills);