import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonCard from '../../components/PokemonCard';
import api from '../../../api';
import {
  setPokemonsRedux,
  setCurrentUrl,
} from '../../../store/actions/pokemons';
import './home.style.scss';

const HomePage = ({ setPokemonsStore, setRequestUrl, pokemons, url }) => {
  HomePage.propTypes = {
    setPokemonsStore: PropTypes.func.isRequired,
    setRequestUrl: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  };
  HomePage.defaultProps = {
    pokemons: [],
  };
  const [lastRequisition, setLastRequisition] = useState(false);

  useEffect(() => {
    const setStore = () => {
      setPokemonsStore(pokemons);
    };
    setStore();
  }, [pokemons, setPokemonsStore]);

  const getDetailsPokemon = (resultObject) => {
    const promises = resultObject.map((e) => api.get(e.url));
    Promise.all(promises).then((result) => {
      const newPokemons = pokemons.concat(result);
      setPokemonsStore(newPokemons);
    });
  };

  const getPokemons = async () => {
    const { data } = await api.get(url);
    if (!data.next) {
      setLastRequisition(true);
    } else {
      setRequestUrl(data.next);
    }
    getDetailsPokemon(data.results);
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      if (!lastRequisition) {
        getPokemons();
      }
    }
  };

  useEffect(() => {
    if (pokemons.length <= 0) {
      getPokemons();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="scrollPage"
      onScroll={handleScroll}
      style={{ overflowY: 'scroll' }}
    >
      <div className="container-cards-pagination">
        <div className="container-cards">
          {pokemons.map((pokemon) => (
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
