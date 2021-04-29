import Routes from './routes/index';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
            <Switch>
                {Routes.map((item, key) => {
                    document.title = item.title;
                    return(
                        <Route path={item.path} exact={item.exact} key={key}>
                            <item.page />
                        </Route>
                    )
                })}
            </Switch>
        </Router>
  );
}

export default App;
