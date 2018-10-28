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
  .add('Icon Buttons', () => (
    <MuiThemeProvider theme={theme}>
      <div className="container">
        <div>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="Add an alarm">
            <Icon>alarm</Icon>
          </IconButton>
          <IconButton color="primary" aria-label="Add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          <input accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }}/>
          <label htmlFor="icon-button-file">
            <IconButton color="primary" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
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
