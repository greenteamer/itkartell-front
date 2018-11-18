import React from 'react'
import Link from 'next/link'
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

const MyCard = withStyles(styles)(({ icon, classes, title, text }) => (
  <Card className={classes.card}>
    <CardContent>
      <div className="wrapper">
        {icon}
        <h4>{title}</h4>
        <p className="text">{text}</p>
      </div>
    </CardContent>
    <CardActions>
      <div className="wrapper">
        <Button size="small">Подробнее</Button>
      </div>
    </CardActions>
    <style jsx>{`
      .wrapper {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
      }
      .text {
        font-family: "NotoSans-Regular";
        font-size: 13px; 
        color: #666;
        text-align: center;
      }
      `}</style>
  </Card>
))

class Features extends React.Component { 
  render() {
    const { classes } = this.props;
    return (
      <div className="featuresWrapper">
        <Container>
          <div className="headerContent">
            <Grid container spacing={32}>
              <Grid item xs={12}>
                <div className="titleWrapper">
                  <TitleBlock
                    preText={<span>features</span>}
                    text={<span style={{ fontFamily: "NotoSans-Bold" }}>Наши преимущества</span>}
                    tag="h2"
                    centered
                  />
                </div>
                {/* <Button size="small" variant="contained" color="primary">Подробнее</Button> */}
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={32}>
                  <Grid item xs={4}>
                    <MyCard
                      icon={<MailIcon style={{color: '#f44438', fontSize: '45px'}} />}
                      title="Профессиональное решение"
                      text="Наша команда обладает всеми навыками для работы над вашим проектом от разработки прототипа до полноценного старта и продвижения в сети."
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <MyCard
                      icon={<GroupIcon style={{color: '#f44438', fontSize: '45px'}} />}
                      title="Низкая стоимость"
                      text="Наша команда обладает всеми навыками для работы над вашим проектом от разработки прототипа до полноценного старта и продвижения в сети."
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <MyCard
                      icon={<SearchIcon style={{color: '#f44438', fontSize: '45px'}} />}
                      title="Работа на результат"
                      text="Наша команда обладает всеми навыками для работы над вашим проектом от разработки прототипа до полноценного старта и продвижения в сети."
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
        <style jsx>{`
          .featuresWrapper {
            position: relative;
            margin-top: 70px;
          }
          .titleWrapper {
            display: flex;
            justify-content: center;
          }
          .blocksWrapper {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            height: 100%;
          }
          .steText {
            margin-bottom: 20px;
          }
        `}</style>
      </div>
    )
  }
}

export default Features