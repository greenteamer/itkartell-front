import React from 'react'
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GroupIcon from '@material-ui/icons/Group';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Container from '../../src/components/Container'
import TitleBlock from '../../src/components/TitleBlock'


const buttonStyles = {
  button: {
    background: 'transparent',
    borderColor: 'white',
    color: 'white',
    '&:hover': {
      borderColor: 'white',
      background: 'transparent',
    }
  },
}

const MyButton = withStyles(buttonStyles)((props) => {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={classNames(classes.button, className)} {...other}>
      {children || 'class names'}
    </Button>
  );
})

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const MyCard = withStyles(styles)(({ classes, title, text }) => (
  <Card className={classes.card}>
    <CardContent>
      <h4>{title}</h4>
      <p className="text">{text}</p>
    </CardContent>
    <CardActions>
      <Button size="small">Подробнее</Button>
    </CardActions>
    <style jsx>{`
      .text {
        font-family: "Akrobat-SemiBold"; 
      }
      `}</style>
  </Card>
))

const WithIconBlock = ({ text, icon, title }) => (<div className="wrapper">
  <div className="iconWrapper"><div className="icon">{icon}</div></div>
  <div className="infoWrapper">
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
  <style jsx>{`
    h4 {
      color: white;
    }
    .wrapper {
      display: flex;
      flex-direction: row;
    }
    .iconWrapper {
    }
    .icon {
      width: 80px;
      height: 80px;
      background: white;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .infoWrapper {
      margin-left: 16px;
    }
    `}</style>
</div>)

class Seo extends React.Component { 
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div className="seoWrapper">
        <Container>
          <div className="headerContent">
            <Grid container spacing={32}>
              <Grid item xs={5}>
                <div className="imageWrapper">
                  <img src="/static/dashboard.png" />
                </div>
              </Grid>
              <Grid item xs={7}>
                <div className="steTextWrapper">
                  <div className="steText">
                    <TitleBlock
                      preText={<span style={{ color: "#fff" }}>seo</span>}
                      text={<span style={{ fontFamily: "NotoSans-Bold", color: "#fff" }}>
                        Вы можете спросить<br/>что такое SEO и зачем вообще оно нужно</span>
                      }
                      tag="h2"
                    />
                    <div>Наша команда обладает всеми навыками для работы над вашим проектом от разработки прототипа до полноценного старта и продвижения в сети.</div>
                    <br></br>
                    <WithIconBlock
                      icon={<GroupIcon style={{color: '#5366cf', fontSize: '45px'}} />}
                      title="Social Media Marketing"
                      text="Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures"
                    />
                    <WithIconBlock
                      icon={<MailIcon style={{color: '#5366cf', fontSize: '45px'}} />}
                      title="Email Marketing"
                      text="Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures"
                    />
                    <WithIconBlock
                      icon={<SearchIcon style={{color: '#5366cf', fontSize: '45px'}} />}
                      title="SEO Optimization"
                      text="Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures"
                    />
                  </div>
                  <div className="moreContainer">
                    <MyButton size="medium" variant="outlined" color="primary">Подробнее</MyButton>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
        <style jsx>{`
          .imageWrapper {
            position: relative;
          }
          .imageWrapper img {
            position: absolute;
            width: 200%;
            right: 0;
          }
          .title {
            margin-top: 0px;
          }
          .seoWrapper {
            position: relative;
            margin-top: 150px;
            padding: 100px 0 70px;
            background-color: #575fd4;
          }
          .headerContent {
            position: relative;
            z-index: 6;
          }
          .secondary {
            color: white;
            font-size: 16px;
            line-height: 28px;
          }
          .firstCard {
            margin-top: 50px;
          }
          .steTextWrapper {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            height: 100%;
          }
          .steText {
            font-size: 13px;
            color: #fff;
            margin-bottom: 20px;
          }
          .moreContainer {
            display: flex;
            width: 100%;
            justify-content: flex-end;
          }
        `}</style>
      </div>
    )
  }
}

export default withStyles(styles)(Seo)