// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import api from "../../../api";
import PokemonCard from '../../components/PokemonCard'
import {useState, useEffect} from 'react'
import './home.style.scss'

const HomePage = () => {

  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async (limit, offset) => {
    const { data } = await api.get(`/pokemon`, {
      params: {
        limit,
        offset
      }
    });
    getDetailsPokemon(data.results)
    
  }

  const getDetailsPokemon = async (resultObject) => {
    const promises = resultObject.map((e) => api.get(e.url));
    Promise.all(promises).then((result) => {
      setPokemons(result);
    });
  }

  useEffect(() => {
    getPokemons(14,0)
    // eslint-disable-next-line
  },[])

  return (
    <div className="container-cards">
     {pokemons.map(pokemon => {
        return( 
          <PokemonCard key={pokemon.data.id} imagePokemon={pokemon.data.sprites.other.dream_world.front_default} numberPokemon={pokemon.data.id} namePokemon={pokemon.data.name} typePokemon={pokemon.data.types[0].type.name}/>
        )
     })}
    </div>
  )

}


export default HomePage