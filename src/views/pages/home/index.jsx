import { connect } from 'react-redux';
import {setPokemonsRedux} from '../../../store/actions/pokemons'
// import { withRouter } from 'react-router-dom';
import api from "../../../api"
import PokemonCard from '../../components/PokemonCard'
import {useState, useEffect} from 'react'
import './home.style.scss'

const HomePage = props => {
  const [currentPokemons, setCurrentPokemons] = useState([]);
  const [lastRequisition, setLastRequisition] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { 
      if(!lastRequisition) {
        getPokemons()
      }
    }
  }
  useEffect(() => {
    const setStore = () => {
      props.setPokemonsStore(currentPokemons)
    }
    setStore()
  }, [currentPokemons, props])

  const getPokemons = async () => {
    const { data } = await api.get(currentUrl)
    !data.next ? setLastRequisition(true) : setCurrentUrl(data.next)
    getDetailsPokemon(data.results)
  }

  const getDetailsPokemon = (resultObject) => {
    const promises = resultObject.map((e) => api.get(e.url));
    Promise.all(promises).then((result) => {
      const newPokemons = currentPokemons.concat(result)
      setCurrentPokemons(newPokemons);
    });
  }
  
  useEffect(() => {
    getPokemons()
    // eslint-disable-next-line
  },[])


  return (
    <div className="scrollPage" onScroll={handleScroll}  style={{overflowY: 'scroll'}}  >
      <div className="container-cards-pagination">
        <div className="container-cards">
            {props.pokemons.map(pokemon => {
              return( 
                <PokemonCard 
                  key={pokemon.data.id} 
                  pokemon={pokemon}
                />
              )
            })}
        </div>
      </div> 
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons.pokemons
  }
}
function mapDispatchToProp(dispatch) {
  return {
    setPokemonsStore(pokemons) {
      const action = setPokemonsRedux(pokemons)
      dispatch(action)
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProp)(HomePage)