import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pokemonsReducer from './reducers/pokemonsReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  pokemons: pokemonsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
