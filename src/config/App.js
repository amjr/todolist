import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from '../screens/main';

export default () => {
  const path = useSelector((state) => state.url.path);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path} component={Main} />
      </Switch>
    </BrowserRouter>
  );
};
