import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from "./components/header/index";
import { HomePage } from "./pages/homePage/index";
import { store } from "./redux";
import { GamePage } from "./pages/gamePage";
import { OrderPage } from "./pages/OrderPage";

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
            <Route exact path="/app/:title">
              <GamePage />
            </Route>
            <Route exact path="/order">
              <OrderPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
