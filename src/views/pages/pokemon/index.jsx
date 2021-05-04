import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BiChevronLeft } from 'react-icons/bi';
import PropTypes from 'prop-types';
import TableInfoPokemon from '../../components/TableInfoPokemon';
import { makeParamsToPokemonPage } from '../../../utils';
import './pokemon.style.scss';

const PokemonPage = ({ pokemon, history }) => {
  PokemonPage.propTypes = {
    pokemon: PropTypes.objectOf.isRequired,
    history: PropTypes.func.isRequired,
  };
  const [sprite, setSprite] = useState(true);

  const {
    stringSkills,
    stringStatus,
    stringTypes,
    spriteFront,
    spriteBack,
    height,
    weight,
    namePokemon,
    imagePokemon,
    bgColor,
    bgImage,
  } = makeParamsToPokemonPage(pokemon);

  const goBack = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (document.referrer !== `http://localhost:3000`) {
      history.push('/');
    } else {
      history.go(-1);
    }
  };

  return (
    <div className={bgImage}>
      <button type="button" className="go-back-btn" onClick={goBack}>
        <BiChevronLeft className="icon" />
      </button>
      <div className="container-pokemon-details">
        <div className="box-pokemon">
          <span className="name-pokemon">{namePokemon}</span>
          <div className={bgColor}>
            <button
              type="button"
              className="sprite"
              onClick={() => {
                setSprite(!sprite);
              }}
            >
              <img src={sprite ? spriteFront : spriteBack} alt="" />
            </button>
            <div className="pokemon-image">
              <img src={imagePokemon} alt={namePokemon} />
            </div>
          </div>
          <TableInfoPokemon
            height={height}
            weight={weight}
            stringTypes={stringTypes}
            stringStatus={stringStatus}
            stringSkills={stringSkills}
          />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    pokemon: state.pokemons.selectedPokemon,
  };
}
export default withRouter(connect(mapStateToProps)(PokemonPage));
