/* eslint-disable react/prop-types */
import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from './card'


storiesOf('ui/atoms', module)
  .add('Card', () => (
    <Card>Simple content of card</Card>
  ))
