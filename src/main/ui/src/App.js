import Login from './views/Login/Login';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css'

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
