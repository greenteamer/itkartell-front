import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import green from '@material-ui/core/colors/green';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import { Card, CardContent, Typography, CardActions, CardActionArea, CardMedia, Button, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';

import theme from '../../lib/muiTheme';

const bull = <span>•</span>;

const SimpleCard = () => (
  <Card>
    <CardContent>
      <Typography color="textSecondary">
        Word of the Day
      </Typography>
      <Typography variant="headline" component="h2">
        be
        {bull}
        nev
        {bull}o{bull}
        lent
      </Typography>
      <Typography color="textSecondary">
        adjective
      </Typography>
      <Typography component="p">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Подробнее</Button>
    </CardActions>
  </Card>
)

const WithImgCard = () => (
  <Card>
    <CardActionArea>
      <CardMedia
        style={{ height: 140 }}
        image="http://localhost:3000/static/header.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
)

const WithHeaderCard = () => (
  <Card>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe">
          R
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardActionArea>
      <CardMedia
        style={{ height: 140 }}
        image="http://localhost:3000/static/header.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
      </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
      </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
    </Button>
      <Button size="small" color="primary">
        Learn More
    </Button>
    </CardActions>
  </Card> 
)

storiesOf('MaterialUI', module)
  .add('Cards', () => (
    <MuiThemeProvider theme={theme}>
      <div className="container">
        <div className="wrapper">
          <SimpleCard />
        </div>
        <div className="wrapper">
          <WithImgCard />
        </div>
        <div className="wrapper">
          <WithHeaderCard />
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: row;
          }
          .wrapper {
            flex: 1;
            margin: 16px;
          }
        `}
        </style>
      </div>
    </MuiThemeProvider>
  ));
