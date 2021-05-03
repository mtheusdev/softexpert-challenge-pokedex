import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { BiChevronLeft } from 'react-icons/bi';
import {useState} from 'react'
import './pokemon.style.scss'

const PokemonPage = props => {

  const { pokemon } = props
  const {skills, baseStatus, height, weight, typePokemon, typesPokemon, spriteFront, spriteBack, namePokemon, imagePokemon} = pokemon 
  const bgImage = `container-page ${typePokemon}-bg`
  const bgColor = `pokemon ${typePokemon}`
  const [sprite, setSprite] = useState(true)
  const stringSkills = skills.map(el => { return el.ability.name}).toString().replaceAll(',', ', ')
  const stringTypes = typesPokemon.map(el => { return el.type.name}).toString().replaceAll(',', ', ')
  const stringStatus = baseStatus.map(el => { 
    return el.effort > 0 ? el.stat.name : null
    }).toString()
    .replaceAll(',', ' ')
    .trim()
    .replaceAll(' ', ',')
    .replaceAll(',,', ', ')
    .replaceAll(',', ', ') 
  // complex filter to format String
  return (
    <div className={bgImage}>
      <Link to="/home">
        <BiChevronLeft className="icon"/>
      </Link>
      <div className="container-pokemon-details">
        <div className="box-pokemon">
        <span className="name-pokemon">{namePokemon}</span>
        <div className={bgColor}>
          <button className="sprite" onClick={() => {
            setSprite(!sprite)
          }}>
            <img src={sprite ? spriteFront : spriteBack} alt=""/>
          </button>
          <div className="pokemon-image">
            <img src={imagePokemon} alt={namePokemon}/>
          </div>
        </div>
        <div className="details">
          <table>
            <tbody>
              <tr>
                <th>Height</th>
                <td>{((height/10) * 100).toFixed(0)}cm</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{(weight/10)}kg</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{stringStatus}</td>
              </tr>
              <tr>
                <th>Skills</th>
                <td>{stringSkills}</td>
              </tr>
              <tr>
                <th>Types</th>
                <td>{stringTypes}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemons.selectedPokemon
  }
}
export default connect(mapStateToProps)(PokemonPage)