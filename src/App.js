import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './component/Home/BookHome'
import Header from './component/Header/Header'
import Header2 from './component/Header/Header2'
import Regiser from './component/UserRegistration/RegisterForm'
import Login from './component/Login/Login'
import Home2 from './component/Home/HOme2'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
          <Switch>
            <Route path="/home"><Home /></Route>
            <Route path="/head"><Header2 /></Route>
            <Route path="/register"><Regiser /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/home2"><Home2 /></Route>
            {/* <Route path="/form"><Form /></Route>
            <Route path="/newform"><NewForm /></Route>
            <Route exact path="/AddressBookForm/:id"><Form /></Route> */}
          </Switch>
        </Router>      
    </div>
  );
}

export default App;
