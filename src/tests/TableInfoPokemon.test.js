import { render, screen } from '@testing-library/react';
import React from 'react';
import TableInfoPokemon from '../views/components/TableInfoPokemon/index';

describe('tests for TableInfoPokemon component ', () => {
  test('Must render the TableInfoPokemon with the height field on the screen', () => {
    render(<TableInfoPokemon />);
    const tdNode = screen.getByTestId('height-field');
    expect(tdNode).toBeDefined();
  });
});
