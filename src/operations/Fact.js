import React from 'react';
import { EditFactModel } from './index.js';
import EditFact from './EditFact';
import DisplayFact from './DisplayFact';

const Fact = o => o.fact instanceof EditFactModel
  ? <EditFact {...o} />
  : <DisplayFact value={o.fact} />;

export default Fact;
