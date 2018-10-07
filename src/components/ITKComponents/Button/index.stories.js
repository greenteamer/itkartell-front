import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import green from '@material-ui/core/colors/green';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Button from './index'

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

storiesOf('Button', module)
  .add('simple', () => (
    <MuiThemeProvider theme={theme}>
      <div className="container">
        <div className="buttons">
          <Button size="small" className="button">
            Small
          </Button>
          <Button size="medium">
            Medium
          </Button>
          <Button size="large">
            Large
          </Button>
        </div>
        <div className="buttons">
          <Button variant="outlined" size="small" color="primary">
            Small
          </Button>
          <Button variant="outlined" size="medium" color="primary">
            Medium
          </Button>
          <Button variant="outlined" size="large" color="primary">
            Large
          </Button>
        </div>
        <div className="buttons">
          <Button variant="contained" size="small" color="primary">
            Small
          </Button>
          <Button variant="contained" size="medium" color="primary">
            Medium
          </Button>
          <Button variant="contained" size="large" color="primary">
            Large
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
