/**
 * Must return and exports an action to set pokemons
 * @param pokemons
 * @returns object
 */
export function setPokemonsRedux(pokemons) {
  return {
    type: 'SET_ALL_POKEMONS',
    payload: pokemons,
  };
}
/**
 * Must return and exports an action to set CurrentUrl
 * @param url
 * @returns object
 */
export function setCurrentUrl(url) {
  return {
    type: 'SET_CURRENT_URL',
    payload: url,
  };
}
/**
 * Must return and exports an action to set the Selected Pokemon
 * @param pokemon
 * @returns object
 */
export function selectPokemon(pokemon) {
  return {
    type: 'SELECT_POKEMON',
    payload: pokemon,
  };
}
