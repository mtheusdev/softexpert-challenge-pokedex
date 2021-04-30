// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import Pagination from "react-js-pagination";
import './pokemon.style.scss'
const PokemonPage = props => {
  return (
    <div className="container-pokemon-details water-bg"> 
      <div className="box-pokemon">
      <span className="name-pokemon">Bulbasaur</span>
        <div className="pokemon grass">
          <button className="sprite">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" alt=""/>
          </button>
          <div className="pokemon-image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt=""/>
          </div>
        </div>
        <div className="details">
          <table>
            <tr>
              <th>Height</th>
              <td>0.7cm</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>6.9kg</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>Speed</td>
            </tr>
            <tr>
              <th>Skills</th>
              <td>Overgrow, Chlorophyl</td>
            </tr>
            <tr>
              <th>Types</th>
              <td>Grass, Poison</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PokemonPage