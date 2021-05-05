const initialState = {
  pokemons: [],
  selectedPokemon: {},
  currentUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
};
/**
 * Must return a new state after execute the action
 * @param state
 * @param action
 * @returns object
 */
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      };
    case 'SET_CURRENT_URL':
      return {
        ...state,
        currentUrl: action.payload,
      };
    case 'SELECT_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
