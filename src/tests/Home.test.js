import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from '../store/storeConfig';
import Home from '../views/pages/home';

describe('tests for Home component ', () => {
  test('Must render the home component and find the title', () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </PersistGate>
      </Provider>,
    );
    const h1Node = screen.getByTestId('title-field');
    expect(h1Node.innerHTML).toEqual('PokExpert');
  });
  test('Must render the home component and find the title', () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </PersistGate>
      </Provider>,
    );
    const h1Node = screen.getByTestId('title-field');
    expect(h1Node.innerHTML).toEqual('PokExpert');
  });
});
