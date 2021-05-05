import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BiChevronLeft } from 'react-icons/bi';
import TableInfoPokemon from '../../components/TableInfoPokemon';
import { makeParamsToPokemonPage } from '../../../utils';

const PokemonPage = ({ pokemon, history }) => {
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
      <button className="go-back-btn" onClick={(e) => goBack(e)} type="button">
        <BiChevronLeft className="icon" />
      </button>
      <div className="container-pokemon-details">
        <div className="card">
          <div className="face front">
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
          <div className="face back" />
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
