import WeatherContainer from "./components/WeatherContainer";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import history from "./components/history";

//this component contains routing part.
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
          <Route path="/">
            <WeatherContainer></WeatherContainer>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
