import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Routes from './routes/index';
import './App.scss';
import configStore from './store/storeConfig';

const store = configStore();

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
