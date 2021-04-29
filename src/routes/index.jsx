import Home from '../views/pages/home';
import Pokemon from '../views/pages/pokemon';

const Routes = [
    {
        title: 'pokemonPage',
        page: Pokemon,
        path: '/pokemon/:id',
        exact: false
    },
    {
        title: 'home',
        page: Home,
        path: '/',
        exact: false
    }
];

export default Routes;