import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TestComponent from '../TestComponent'
import Menu from './index'


storiesOf('Menu', module)
  .add('simple', () => (
    <Menu />
  ))
  .add('dark', () => (
    <Menu dark />
  ))
  .add('light', () => (
    <Menu light />
  ));
