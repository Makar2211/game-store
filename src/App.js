import React from "react";
import {
  BrowserRouter as Router,
  Switch as Switch,
  Route,
} from "react-router-dom";
import { Header } from "./components/header/index";
import { HomePage } from "./pages/homePage/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
