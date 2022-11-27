import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch as Switch,
  Route,
} from "react-router-dom";
import { Header } from "./components/header/index";
import { HomePage } from "./pages/homePage/index";
import { store } from './redux'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
