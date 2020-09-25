import React from 'react';
import './App.css';
import AccountProfile from "./components/AccountProfile";
import Navbar from "./Navbar";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route
        exact
        path="/"
        />

        <Route
        exact
        path="/account/profile"
        render={ () => <AccountProfile /> }
        />
      </Switch>
    </Container>
  </>
)

export default App;
