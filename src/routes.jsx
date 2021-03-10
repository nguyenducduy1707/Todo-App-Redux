import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/:id" component={TodoDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
