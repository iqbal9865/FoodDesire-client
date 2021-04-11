
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Order from './components/Order/Order';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/order">
            <Order/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
