import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import React, { useState } from 'react';
import Routes from './routes/index';
import './theme/main.scss';
import { PokemonContext } from './providers/CurrentPokemons';
import { store, persistor } from './store/storeConfig';

function App() {
  const [pokeCtx, setPokeCtx] = useState([]);
  const [urlCtx, setUrlCtx] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
  );
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            {Routes.map((item) => {
              document.title = item.title;
              return (
                <Route path={item.path} exact={item.exact} key={item.title}>
                  <PokemonContext.Provider
                    value={{ pokeCtx, setPokeCtx, urlCtx, setUrlCtx }}
                  >
                    <item.page />
                  </PokemonContext.Provider>
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
