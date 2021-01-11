import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home";
import HomePage from "./Components/HomePage/Homepage";
import LoginAndSignup from "./Components/Forms/Froms";
import Footer from "./Components/Footer/Footer";
import AdminDashboard from "./Components/AdminDashBoard";
import Dashboard from "./Components/UserDashboard";
import PrivateRoute from "./auth/PrivateRoutes";
import AdminRoute from "./auth/AdminRoute";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Product from "./Components/Product";
import Cart from "./Components/Cart/Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/*  <Route exact path="/home">
          <Home />
        </Route> */}
        <Route exact path="/homepage" component={HomePage} />

        <Route path="/login-signup">
          <LoginAndSignup />
        </Route>
        <Route path="/product/:productId" exact component={Product} />
        <Route path="/cart" exact component={Cart} />

        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
