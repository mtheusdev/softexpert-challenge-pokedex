import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeParamsPokemonCard } from '../../../utils/index';
import { selectPokemon } from '../../../store/actions/pokemons';

// import('./pokemon-card.style.scss');

const PokemonCard = ({ pokemon, setSelectedPokemon, history }) => {
  PokemonCard.propTypes = {
    pokemon: PropTypes.objectOf(PropTypes.objectOf),
    setSelectedPokemon: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.objectOf),
  };
  PokemonCard.defaultProps = {
    history: '',
    pokemon: {},
  };
  const paramsPokemonCard = makeParamsPokemonCard(pokemon.data);
  const {
    imagePokemon,
    namePokemon,
    numberPokemon,
    typePokemon,
  } = paramsPokemonCard;
  const classes = `card-container ${paramsPokemonCard.typePokemon}`;
  const url = `/pokemon/${paramsPokemonCard.numberPokemon}`;

  const goToPokemonPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedPokemon(paramsPokemonCard);
    history.push(url);
  };
  return (
    <div className={classes}>
      <div className="box-image">
        <div className="circle">
          <button type="button" onClick={goToPokemonPage}>
            <img src={imagePokemon} alt={namePokemon} />
          </button>
        </div>
      </div>
      <div className="box-number-pokemon">
        <span>{`#${`00000${numberPokemon}`.slice(-5)}`}</span>
      </div>
      <span className="name-pokemon">{namePokemon}</span>
      <span className="type-pokemon">Type: {typePokemon}</span>
    </div>
  );
};

function mapDispatchToProp(dispatch) {
  return {
    setSelectedPokemon(pokemon) {
      const action = selectPokemon(pokemon);
      dispatch(action);
    },
  };
}

export default withRouter(connect(null, mapDispatchToProp)(PokemonCard));
