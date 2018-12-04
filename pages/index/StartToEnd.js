import React from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Container from '../../src/components/Container'
import TitleBlock from '../../src/components/TitleBlock'


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
        font-family: "NotoSans-Regular";
        font-size: 13px; 
        color: #666;
      }
      `}</style>
  </Card>
))

class StartToEnd extends React.Component { 
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div className="startToEndwrapper">
        <Container>
          <div className="headerContent">
            <Grid container spacing={32}>
              <Grid item xs={5}>
                <div className="steTextWrapper">
                  <div className="steText">
                    <TitleBlock preText={<span>about</span>} text={<span style={{ fontFamily: "NotoSans-Bold" }}>Разработка<br/>полного цикла</span>} tag="h2" />
                    <div>Наша команда обладает всеми навыками для работы над вашим проектом от разработки прототипа до полноценного старта и продвижения в сети.</div>
                    <br></br>
                    <div>Мы понимаем что в современном мире мы не можем предлагать продукт который не отвечает текущим требованиям рынка. Зачастую малый бизнес сталкивается с тем что для его эффективной работы нужен актуальный ресурс - современное web приложение, а не просто страничка в интернете, что часто оказывается слишком затратно. Положение может сильно усложнится необходимостью создания мобильного приложения, так как затраты могут сильно выйти за рамки бюджета. Команда IT Kartell нашла для Вас экономное и при этом не уступающее по своим функциональным возможностям решение, мы экономим на общем для разного вида работ стеке и используем современные и эффективные разработки.</div>
                  </div>
                  <Button size="small" variant="contained" color="primary">Подробнее</Button>
                </div>
              </Grid>
              <Grid item xs={7}>
                <Grid container spacing={32}>
                  <Grid item xs={6}>
                    <Grid container spacing={32}>
                      <Grid item xs={12}>
                        <div className="firstCard">
                          <MyCard
                            title="Дизайн"
                            text="Наша команда обладает всеми навыками для работы над вашим проектом от разработки прототипа до полноценного старта и продвижения в сети."
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <MyCard
                          title="Разработка"
                          text="Наша команда обладает всеми навыками для работы над вашим проектом от разработки прототипа до полноценного старта и продвижения в сети."
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container spacing={32}>
                      <Grid item xs={12}>
                        <MyCard
                          title="Продвижение"
                          text="Наша команда обладает всеми навыками для работы над вашим проектом от разработки прототипа до полноценного старта и продвижения в сети."
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MyCard
                          title="Аналитика"
                          text="Наша команда обладает всеми навыками для работы над вашим проектом от разработки прототипа до полноценного старта и продвижения в сети."
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
        <style jsx>{`
          .title {
            margin-top: 0px;
          }
          .startToEndwrapper {
            position: relative;
            margin-top: 50px;
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
            color: #666;
            margin-bottom: 20px;
          }
        `}</style>
      </div>
    )
  }
}

export default withStyles(styles)(StartToEnd)