import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BunVenitPage from '../src/pages/BunVenitPage';
import CerintePage from '../src/pages/CerintePage'

function App() {
  return (
   <Router>
     <Switch>
          <Route exact={true} path="/" component={BunVenitPage}></Route>
          <Route exact={true} path="/cerinte" component={CerintePage}></Route>
     </Switch>
   </Router>
  );
}

export default App;
