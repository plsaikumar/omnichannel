import React from "react"
import Navigation from "./Components/Navigation/Navigation"
import Home from "./Pages/Home"
import LoginAndSignup from "./Components/Forms/LoginAndSignup"
import Footer from "./Components/Footer/Footer"

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
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
