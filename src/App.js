import React from "react"
import Navigation from "./Components/Navigation/Navigation"
import Home from "./Pages/Home"
import LoginAndSignup from "./Components/Forms/Froms"
import Footer from "./Components/Footer/Footer"
import Cart from "./Components/Cart/Cart"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/login-signup">
          <LoginAndSignup />
        </Route>
        <Cart />
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;

