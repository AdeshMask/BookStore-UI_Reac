import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Regiser from './component/UserRegistration/RegisterForm'
import Login2 from './component/Login/Login2'
import Home from './component/Home/HOme2'
import Cart from './component/Cart/Cart'
import Carts from './component/Cart/Carts'
import Order from './component/Order/Order' 

function App() {
  return (
    <div className="App">
     
      <Router>
          <Switch>
            <Route path="/register"><Regiser /></Route>
            <Route path="/login"><Login2 /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/carts"><Carts /></Route>
            <Route exact path="/Order/:id"><Order /></Route>
          </Switch>
        </Router>      
    </div>
  );
}

export default App;
