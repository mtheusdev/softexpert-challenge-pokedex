//action creator receive all pokemons (array)
export function getPokemons(pokemons) {
  // return action (object)
  return {
    type: 'GET_ALL_POKEMONS',
    payload: pokemons
  }

}
//action creator receive one pokemon (object)
export function selectPokemon(pokemon) {
  // return action (object)
  return {
    type: 'SELECT_POKEMON',
    payload: pokemon
  }

}