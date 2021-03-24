import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailsPokes from "./components/detailsPoke";
import Home from './Home';


const App = () => {
  return (
    <div className="App">
      <h1>Pokedex</h1> 
      <Router>
        <Switch>
        <Route path="/" exact={true}>            
            <Home />
        </Route>
          <Route path="/pokes-details/:name">
            <DetailsPokes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
