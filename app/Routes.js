import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ElectricChargesScene from './scenes/electric-charges/ElectricChargesScene';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ElectricChargesScene}/>
    </Switch>
  </BrowserRouter>
);
