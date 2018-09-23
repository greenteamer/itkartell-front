import React from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Container from '../../components/Container'
import Menu from '../../components/Menu'
import Typed from '../../components/Typed'


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

const MyCard = withStyles(styles)(({ classes }) => { 
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Word of the Day
        </Typography>
        <Typography variant="headline" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
})

class StartToEnd extends React.Component { 

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <div className="startToEndwrapper">
        <Container>
          <div className="headerContent">
            <Grid container spacing={16}>
              <Grid item xs={5}>
              </Grid>
              <Grid item xs={7}>
                <Grid container spacing={32}>
                  <Grid item xs={6}>
                    <Grid container spacing={32}>
                      <Grid item xs={12}>
                        <div className="firstCard">
                          <MyCard />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <MyCard />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container spacing={32}>
                      <Grid item xs={12}>
                        <MyCard />
                      </Grid>
                      <Grid item xs={12}>
                        <MyCard />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
        <style jsx>{`
          .startToEndwrapper {
            position: relative;
            margin-top: -50px;
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
        `}</style>
      </div>
    )
  }
}

export default withStyles(styles)(StartToEnd)