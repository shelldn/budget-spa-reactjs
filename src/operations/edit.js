import React from 'react';
import Plan from './Plan';
import Fact from './Fact';

const edit = (o) => [
  <Plan {...o} />,
  <Fact {...o} />
];

export default edit;
