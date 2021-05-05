import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BiChevronLeft } from 'react-icons/bi';
import TableInfoPokemon from '../../components/TableInfoPokemon';
import { makeParamsToPokemonPage, style } from '../../../utils';
import useSprite from '../../../hooks/useSprite';

const PokemonPage = ({ pokemon, history }) => {
  const { sprite, changeSprite } = useSprite(false);

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

  /** Must return to the previous page
   * @param event
   * @returns void
   */
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
      <div className="buttons">
        <button
          className="go-back-btn"
          onClick={(e) => goBack(e)}
          type="button"
        >
          <BiChevronLeft className="icon" />
        </button>
        <button type="button" className="sprite" onClick={changeSprite}>
          <img src={sprite ? spriteFront : spriteBack} alt="" />
        </button>
      </div>
      <div className="container-pokemon-details">
        <div className="card">
          <div className="face front">
            <span className="name-pokemon">{namePokemon}</span>
            <div className={bgColor}>
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
          <div style={style} className="face back" />
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
