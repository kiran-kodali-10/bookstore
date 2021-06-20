import Login from './views/Login/Login';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import './App.css'
import Admin from './layout/Admin';
import { Provider } from 'react-redux';
import store from './redux/store';

// const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter >
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" render={(props) => <Admin {...props} />} />
            <Route exact path="/admin" render={(props) => <Admin {...props} />} />
            <Route exact path="/upload" render={(props) => <Admin {...props} />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
