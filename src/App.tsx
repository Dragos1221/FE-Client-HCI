import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BunVenitPage from '../src/pages/BunVenitPage';
import CerintePage from '../src/pages/CerintePage'
import CvPage from '../src/pages/CvPage';

function App() {
  return (
   <Router>
     <Switch>
          <Route exact={true} path="/" component={BunVenitPage}></Route>
          <Route exact={true} path="/cerinte" component={CerintePage}></Route>
          <Route exact={true} path="/cv" component={CvPage}></Route>
     </Switch>
   </Router>
  );
}

export default App;
