import React, { useState, useEffect, useCallback, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard';
import api from '../../../api';
import { PokemonContext } from '../../../providers/CurrentPokemons';

const HomePage = () => {
  const { pokeCtx, setPokeCtx, urlCtx, setUrlCtx } = useContext(PokemonContext);
  const [lastRequisition, setLastRequisition] = useState(false);

  /** Must return a formatted object to assemble a component
   * @param resultObject
   * @returns void
   */
  const getDetailsPokemon = (resultObject) => {
    const promises = resultObject.map((e) => api.get(e.url));
    Promise.all(promises).then((result) => {
      const newPokemons = pokeCtx.concat(result);
      setPokeCtx(newPokemons);
    });
  };

  /**
   * must get the pokemons provided by the api and set the store status
   * @returns void
   */
  const getPokemons = async () => {
    const { data } = await api.get(urlCtx);
    if (!data.next) {
      setLastRequisition(true);
    } else {
      setUrlCtx(data.next);
    }
    getDetailsPokemon(data.results);
  };
  /** Should get more pokemons when you get to the bottom of the screen
   * @param event
   * @returns void
   */
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
  /** Must catch the first pokemons when loading the page for the first time
   * @returns void
   */
  useEffect(() => {
    if (pokeCtx && pokeCtx.length === 0) {
      getPokemons();
    }
  }, []);

  return (
    <div
      className="scrollPage"
      onScroll={handleScroll}
      style={{ overflowY: 'scroll' }}
    >
      <div className="title">
        <h1 data-testid="title-field">PokExpert</h1>
      </div>
      <div className="container-cards-pagination">
        <div className="container-cards">
          {pokeCtx &&
            pokeCtx.map((pokemon) => (
              <PokemonCard key={pokemon.data.id} pokemon={pokemon} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(HomePage);
