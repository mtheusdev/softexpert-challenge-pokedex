const initialState = {
  pokemons: [],
  selectedPokemon: {}
}

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_POKEMONS':
      return {
        ...state,
        pokemons: action.payload
      }
    case 'SELECT_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload
      }
    default: 
      return state
  }
}

export default pokemonReducer