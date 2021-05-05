import React, { useState, useEffect, useCallback, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PokemonCard from '../../components/PokemonCard';
import api from '../../../api';
import { PokemonContext } from '../../../providers/CurrentPokemons';
import {
  setPokemonsRedux,
  setCurrentUrl,
} from '../../../store/actions/pokemons';

const HomePage = () => {
  const { pokeCtx, setPokeCtx } = useContext(PokemonContext);
  const [lastRequisition, setLastRequisition] = useState(false);
  const [urlRequisition, setUrlRequisition] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
  );

  const getDetailsPokemon = (resultObject) => {
    const promises = resultObject.map((e) => api.get(e.url));
    Promise.all(promises).then((result) => {
      const newPokemons = pokeCtx.concat(result);
      setPokeCtx(newPokemons);
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
    if (pokeCtx.length === 0) {
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
          {pokeCtx.map((pokemon) => (
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
