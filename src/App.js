import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Menu from "./containers/Menu/Menu";
import Pizzas from "./containers/Menu/PizzaMenu/Pizzas/Pizzas";
import Sushi from "./containers/Menu/SushiMenu/Sushi/Sushi";
import Desserts from "./containers/Menu/DessertsMenu/Desserts/Desserts";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Contact from "./components/ContactUs/Contact";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/menu" component={Menu} />
        <Route path="/about_us" component={AboutUs} />
        {/* <Route path="/contact_us" component={ContactUs} /> */}
        <Route path="/contacts" component={Contact} />
        <Route path="/pizzas" component={Pizzas} />
        <Route path="/sushi" component={Sushi} />
        <Route path="/desserts" component={Desserts} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default withRouter(App);
