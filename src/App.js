import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import Routes from './routes/index';
import './App.scss';
import { store, persistor } from './store/storeConfig';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
