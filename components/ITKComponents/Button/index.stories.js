import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './index'


storiesOf('Button', module)
  .add('simple', () => (
    <Button variant="contained" color="primary" >Hello button</Button>
  ));
