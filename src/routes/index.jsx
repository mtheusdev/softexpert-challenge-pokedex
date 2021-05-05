import Home from '../views/pages/home';
import Pokemon from '../views/pages/pokemon';

/**
 * Must configure and export an array of routes
 * @exports object
 */
const Routes = [
  {
    title: 'pokemonPage',
    page: Pokemon,
    path: '/pokemon/:id',
    exact: false,
  },
  {
    title: 'home',
    page: Home,
    path: '/',
    exact: false,
  },
];

export default Routes;
