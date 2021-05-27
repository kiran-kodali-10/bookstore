import Login from './views/Login/Login';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css'
// import HomePage from './views/HomePage/HomePage';
import Admin from './layout/Admin';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" render={(props) => <Admin {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
