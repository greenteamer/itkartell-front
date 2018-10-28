import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import green from '@material-ui/core/colors/green';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Button, Icon, IconButton,  } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import theme from '../../lib/muiTheme';


storiesOf('MaterialUI', module)
  .add('Buttons', () => (
    <MuiThemeProvider theme={theme}>
      <div className="container">
        <div className="buttons">
          <Button size="small" variant="raised">
            Маленькая
          </Button>
          <Button size="medium">
            Средняя
          </Button>
          <Button size="large">
            Большая
          </Button>
        </div>
        <div className="buttons">
          <Button variant="outlined" size="small" color="primary">
            Маленькая
          </Button>
          <Button variant="outlined" size="medium" color="primary">
            Средняя
          </Button>
          <Button variant="outlined" size="large" color="primary">
            Большая
          </Button>
        </div>
        <div className="buttons">
          <Button variant="contained" size="small" color="primary" disableRipple>
            Маленькая
          </Button>
          <Button variant="contained" size="medium" color="primary">
            Средняя
          </Button>
          <Button variant="contained" size="large" color="primary">
            Большая
          </Button>
        </div>
        <div className="buttons">
          <Button variant="contained" color="default" >default</Button>
          <Button variant="contained" color="primary">primary</Button>
          <Button variant="contained" color="secondary">secondary</Button>
          <Button variant="contained" color="secondary" disabled>secondary disabled</Button>
          <Button variant="extendedFab" color="primary">extendedFab</Button>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
          }
          .buttons {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 16px 0;
          }
          .button {
            margin: 0 8px;
          }
          .buttonContainer {
            margin: 8px;
          }
        `}
        </style>
      </div>
    </MuiThemeProvider>
  ));