import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PokemonCard from '../../components/PokemonCard';
import api from '../../../api';
import {
  setPokemonsRedux,
  setCurrentUrl,
} from '../../../store/actions/pokemons';
// import './home.style.scss';

const HomePage = () => {
  const [lastRequisition, setLastRequisition] = useState(false);
  const [localPokemons, setLocalPokemons] = useState([]);
  const [urlRequisition, setUrlRequisition] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
  );

  const getDetailsPokemon = (resultObject) => {
    const promises = resultObject.map((e) => api.get(e.url));
    Promise.all(promises).then((result) => {
      const newPokemons = localPokemons.concat(result);
      setLocalPokemons(newPokemons);
    });
  };

  const getPokemons = async () => {
    const { data } = await api.get(urlRequisition);
    if (!data.next) {
      setLastRequisition(true);
    } else {
      setUrlRequisition(data.next);
    }
    getDetailsPokemon(data.results);
  };

  const handleScroll = useCallback(
    (e) => {
      const bottom =
        e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) {
        if (!lastRequisition) {
          getPokemons();
        }
      }
    },
    [getPokemons],
  );

  useEffect(() => {
    if (localPokemons.length === 0) {
      getPokemons();
    }
  }, []);

  return (
    <div
      className="scrollPage"
      onScroll={handleScroll}
      style={{ overflowY: 'scroll' }}
    >
      <div className="container-cards-pagination">
        <div className="container-cards">
          {localPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.data.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons.pokemons,
    url: state.pokemons.currentUrl,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    setPokemonsStore(pokemons) {
      const action = setPokemonsRedux(pokemons);
      dispatch(action);
    },
    setRequestUrl(url) {
      const action = setCurrentUrl(url);
      dispatch(action);
    },
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProp)(HomePage),
);
