import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ContentTitle from '../components/contentTitle';
import ImageAvatar from '../components/avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
  root: {
    justifyContent: 'center',
    padding: '0',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
  },
    profile: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
    avatar: {
    marginRight: 50,
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      marginTop: 10,
    },
  },
    contents: {
    display: 'flex',
    marginTop: 30,
    paddog: '0 16',
    boxShadow:'0 1px 4px 1px rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
  },
    header: {
    marginLeft: 0,
    color: '#eaeaea',
    display: 'inline-block',
    backgroundColor: '#4bc0c8',
    boxShadow:'0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
    borderRadius: 8,
    padding: 16,
    width:200,
  },
    name: {
    fontSize: '1.6rem',
  },
    job: {
    fontSize: '0.9rem',
  },
    contentBody: {
    paddingLeft: 16,
    color: '#666666',
    '& dt': {
      fontWeight: 700,
    },
  },
    career: {
    marginTop: 50,
    [theme.breakpoints.up('md')]: {
      marginLeft: 400,
    },
  },
    timeline: {
    position: 'relative',
    padding: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px ${theme.spacing(4)}px`,
    '& .entry': {
      position: 'relative',
      marginBottom: theme.spacing(4),
      '&:after': {
        content: '""',
        position: 'absolute',
        top: theme.spacing(0.25),
        left: `-${theme.spacing(4)}px`,
        height: theme.spacing(2),
        width: theme.spacing(2),
        backgroundColor: '#4bc0c8',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
        borderRadius: '50%',
        zIndex: 2,
      },
    },
    '& p': {
      margin: `0`,
      color: '#666666',
    },
    '& .during': {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(1),
    },
    '& .title': {
      fontWeight: 700,
      marginBottom: theme.spacing(1.5),
      fontSize: 18,
      color: '#666666',
    },
    '& .body': {
      background: theme.palette.background.paper,
      boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.1)',
      borderRadius: theme.spacing(1),
      padding: theme.spacing(2),
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: theme.spacing(0.75),
      height: '100%',
      width: theme.spacing(0.5),
      background: '#eaeaea',
      borderRadius: theme.spacing(0.25),
      zIndex: 1,
    },
  },
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Profile',
      subtitle: 'プロフィール',
      birth: '1995.11',
      age: '24',
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <section>
        <ContentTitle variant="h2" title={this.state.title} subtitle={this.state.subtitle}/>
        <Container>
          <div className={classes.root}>
              <div className={classes.profile}>
                <div className={classes.avatar}>
                 <ImageAvatar/>
                </div>
                <div className={classes.contents}>
                  <div>
                    <div className={classes.header}>
                      <div className={classes.name}>Iida Jun（24）</div>
                      <div className={classes.job}>Web Developer</div>
                    </div>
                    <div className={classes.contentBody}>
                      <dl>
                        <dt>誕生日</dt>
                          <dd>{this.state.birth}</dd>
                      </dl>
                      <dl>
                        <dt>趣味</dt>
                        <dd>漫画・アニメ・映画・スポーツ・音楽</dd>
                      </dl>
                      <dl>
                        <dt>自己紹介</dt>
                        <dd>長崎出身の24歳男性
                          <br/>東京都目黒区在住
                          <br/>企業経験あり
                          <br/>個人で食に関するYouTubeを運用
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.career}>
                <div className={classes.header}>
                  <div className={classes.name}>Career</div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2019.5 - 現在</p>
                      <Typography variant="h3" className="title">
                      <dt>IT教育系アプリ
                      <br/>プロダクトオーナー・社内SE 兼 プログラミングメンター</dt>
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                        業務委託契約
                        <br />
                        GitHubのカンバンを使用して、自社プロダクトのスクラム開発プロセスを管理
                        <br />
                        大幅なアプリの効率化を実現し、入社5ヶ月で社長賞受賞
                        <br />
                        社内のアプリ改修案件を管理
                        <br />
                        メンターとして250名以上をメンタリング
                        <br />
                        <br />
                        Ruby, Ruby on Rails, Javascript, HTML, CSS, GitHub, AWS
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2018.04 - 2019.9</p>
                      <Typography variant="h3" className="title">
                      <dt>起業・共同設立 ネット広告系アプリ
                      <br/>ディレクター 兼 フロントエンジニア</dt>
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                      業務委託契約
                      <br />
                      ビジネスプランの企画からアプリ設計・開発・SNSマーケティング・登記・ローンチを経験
                        <br />
                        ブロックチェーンとAIを使用した2C向けのWebアプリケーション
                        <br />
                        仮想通貨絡みの法律や、エンジェル投資家からの投資が得られなかったことの資金不足で運用を中断
                        <br />
                        <br />
                        Javascript, React
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2017.08 - 2018.01</p>
                      <Typography variant="h3" className="title">
                      <dt>メディア系アプリ
                      <br/>サーバーサイドエンジニア</dt>
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                      インターン・のちに業務委託契約
                        <br />
                        自社サービスのバックエンドエンジニアとしてインターン
                        <br />
                        Ruby on RailsとWordPressで構築されたサイトのサーバーサイド担当
                        <br />
                        台湾がメインダーゲットのWebアプリケーション
                        <br />
                        <br />
                        Ruby, Ruby on Rails, Javascript, HTML, CSS, GitHub, AWS, WordPress
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2012.04 - 2017.08</p>
                      <Typography variant="h3" className="title">
                      <dt>DMM Web Camp
                      <br/>Ruby on Rails</dt>
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                        プログラミングスクール学生
                        <br />
                        DMM We Camp
                        <br />
                        Webアプリケーション開発の基礎を学習
                        <br />
                        定常業務以外に改善活動に注力いたしました。
                        <br />
                        <br />
                        Ruby, Ruby on Rails, Javascript, HTML, CSS, GitHub, AWS
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2012.04 - 2017.08</p>
                      <Typography variant="h3" className="title">
                      <dt>SES
                      <br/>ネットワークエンジニア</dt>
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                        正社員
                        <br />
                      ネットワーク機器の設定・運用
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2012.04 - 2017.08</p>
                      <Typography variant="h3" className="title">
                      <dt>人材開発
                      <br/>技術職（工業系）</dt>
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                      正社員
                        <br />
                        某大手企業代表の 技能オリンピック選手
                        <br />
                        技能オリンピック 日本6位
                        <br />
                        現場のIoT導入・標準化・自動化に貢献
                        <br />
                        社長賞・厚生労働大臣賞受賞・その他4賞受賞
                      </p>
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

export default withStyles(useStyles)(Profile);