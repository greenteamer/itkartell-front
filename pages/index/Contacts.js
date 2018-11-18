import React from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
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

class Contacts extends React.Component { 
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
                    <TitleBlock
                      preText={<span>contact us</span>}
                      text={<span style={{ fontFamily: "NotoSans-Bold" }}>Мы знаем как сделать<br/> Ваш бизнес еще эффективнее</span>}
                      tag="h3"
                    />
                    <TextField
                      id="email-input"
                      label="Email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      id="name-input"
                      label="Ваше имя"
                      type="text"
                      name="name"
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      id="name-input"
                      label="Сообщение"
                      type="text"
                      name="description"
                      margin="normal"
                      fullWidth
                      multiline
                      rows={5}
                    />
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

export default withStyles(styles)(Contacts)