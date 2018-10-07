import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Menu from './index'


storiesOf('Menu', module)
  .add('simple', () => (
    <div style={{
      background: '#333',
      height: 100,
      margin: -8,
    }}>
      <Menu />
    </div>
  ));
