import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Routes from './routes/index';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        {Routes.map((item) => {
          document.title = item.title;
          return (
            <Route path={item.path} exact={item.exact} key={item.title}>
              <item.page />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
