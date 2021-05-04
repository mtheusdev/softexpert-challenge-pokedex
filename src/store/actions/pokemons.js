// action creator receive all pokemons (array)
export function setPokemonsRedux(pokemons) {
  // return action (object)
  return {
    type: 'SET_ALL_POKEMONS',
    payload: pokemons,
  };
}
export function setCurrentUrl(url) {
  // return action (object)
  return {
    type: 'SET_CURRENT_URL',
    payload: url,
  };
}

// action creator receive one pokemon (object)
export function selectPokemon(pokemon) {
  // return action (object)
  return {
    type: 'SELECT_POKEMON',
    payload: pokemon,
  };
}
