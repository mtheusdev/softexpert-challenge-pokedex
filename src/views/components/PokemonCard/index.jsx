import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {selectPokemon} from '../../../store/actions/pokemons'
import('./pokemon-card.style.scss')
const PokemonCard = props => {

  const { pokemon } = props
  const detailsPokemon = pokemon.data
  const paramsPokemonCard = {
    typePokemon: detailsPokemon.types[0].type.name,
    typesPokemon: detailsPokemon.types,
    numberPokemon: detailsPokemon.id,
    imagePokemon: detailsPokemon.sprites.other.dream_world.front_default ?  pokemon.data.sprites.other.dream_world.front_default  : 'https://i.pinimg.com/originals/b1/bf/cc/b1bfcc576b8559d09efd318486f60a19.png',
    namePokemon: detailsPokemon.name,
    skills: detailsPokemon.abilities,
    baseStatus: detailsPokemon.stats,
    weight: detailsPokemon.weight,
    height: detailsPokemon.height,
    spriteFront: detailsPokemon.sprites.front_default,
    spriteBack: detailsPokemon.sprites.back_default,
  }

  const classes = `card-container ${paramsPokemonCard.typePokemon}`
  const url = `/pokemon/${paramsPokemonCard.numberPokemon}`
  return (
    <div className={classes}>
      <div className="box-image">
        <div className="circle">
        <Link to={url}>
          <button onClick={() => {
            props.setSelectedPokemon(paramsPokemonCard)
          }}>
            <img src={paramsPokemonCard.imagePokemon} alt={paramsPokemonCard.namePokemon}/>
          </button>
        </Link>
        </div>
      </div>
      <div className="box-number-pokemon">
        <span>{'#' +("00000" + paramsPokemonCard.numberPokemon).slice(-5)}</span>
      </div>
      <span className="name-pokemon">{paramsPokemonCard.namePokemon}</span>
      <span className="type-pokemon">Type: {paramsPokemonCard.typePokemon}</span>
    </div>
  )
}
function mapDispatchToProp(dispatch) {
  return {
    setSelectedPokemon(pokemon) {
      const action = selectPokemon(pokemon)
      dispatch(action)
    }
  }

}

export default connect(null, mapDispatchToProp)(PokemonCard)