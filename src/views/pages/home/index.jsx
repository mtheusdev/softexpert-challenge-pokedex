import { setPokemonsRedux, setCurrentUrl } from 'store/actions/pokemons'
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PokemonCard from 'views/components/PokemonCard'
import api from "api"
import './home.style.scss'

const HomePage = props => {

  const {setPokemonsStore, setRequestUrl, pokemons} = props
  const [lastRequisition, setLastRequisition] = useState(false);

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
      setPokemonsStore(pokemons)
    }
    setStore()
  }, [pokemons, setPokemonsStore])

  const getPokemons = async () => {
    const { data } = await api.get(props.url)
    !data.next ? setLastRequisition(true) : setRequestUrl(data.next)
    getDetailsPokemon(data.results)
  }

  const getDetailsPokemon = (resultObject) => {
    const promises = resultObject.map((e) => api.get(e.url));
    Promise.all(promises).then((result) => {
      const newPokemons = pokemons.concat(result)
      setPokemonsStore(newPokemons);
    });
  }

  useEffect(() => {
    if((pokemons.length <= 0)) {
      getPokemons()
    }
    // eslint-disable-next-line
  },[])


  return (
    <div className="scrollPage" onScroll={handleScroll}  style={{overflowY: 'scroll'}}  >
      <div className="container-cards-pagination">
        <div className="container-cards">
            {pokemons.map(pokemon => {
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
    pokemons: state.pokemons.pokemons,
    url: state.pokemons.currentUrl
  }
}
function mapDispatchToProp(dispatch) {
  return {
    setPokemonsStore(pokemons) {
      const action = setPokemonsRedux(pokemons)
      dispatch(action)
    },
    setRequestUrl(url) {
      const action = setCurrentUrl(url)
      dispatch(action)
    }
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProp)(HomePage))
