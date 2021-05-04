import { createStore, combineReducers } from 'redux';
import pokemonsReducer from './reducers/pokemonsReducer';

const reducers = combineReducers({
  pokemons: pokemonsReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
