
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
import Checkout from './components/Checkout/Checkout'
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Manageproduct from './components/Manageproduct/Manageproduct';

export const UserContext = createContext()

function App() {
  const [logInUser, setLogInUser] = useState({})
  return (
    <div className="App">
       <UserContext.Provider value={[logInUser, setLogInUser]}>
        <Router>
          <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/manageorder">
            <Manageproduct/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:_id">
            <Checkout/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        </Router>
        </UserContext.Provider>
    </div>
  );
}

export default App;
