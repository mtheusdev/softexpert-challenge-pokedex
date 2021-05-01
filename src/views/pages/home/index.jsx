// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import api from "../../../api"
import PokemonCard from '../../components/PokemonCard'
import {useState, useEffect} from 'react'
import './home.style.scss'

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { 
        console.log("bottom")
    }
  }
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
    getPokemons(30,0)
    // eslint-disable-next-line
  },[])

  return (
    <div className="scrollPage" onScroll={handleScroll}  style={{overflowY: 'scroll'}}  >
      <div className="container-cards-pagination">
        <div className="container-cards">
            {pokemons.map(pokemon => {
              const imgPokemon = pokemon.data.sprites.other.dream_world.front_default ?  pokemon.data.sprites.other.dream_world.front_default  : 'https://i.pinimg.com/originals/b1/bf/cc/b1bfcc576b8559d09efd318486f60a19.png'
              return( 
                <PokemonCard key={pokemon.data.id} imagePokemon={imgPokemon} numberPokemon={pokemon.data.id} namePokemon={pokemon.data.name} typePokemon={pokemon.data.types[0].type.name}/>
              )
            })}
        </div>
      </div> 
    </div>
  )
}

export default HomePage