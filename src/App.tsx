import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BunVenitPage from '../src/pages/BunVenitPage';
import CerintePage from '../src/pages/CerintePage'
import CvPage from '../src/pages/CvPage';
import SelectieCVPage from './pages/SelectieCVPage';
import InstructiuniPage from './pages/InstructiuniPage';
import ShowJobsAndCvs from './pages/ShowJobsAndCvPage';

function App() {
  return (
   <Router>
     <Switch>
          <Route exact={true} path="/" component={BunVenitPage}></Route>
          <Route exact={true} path="/cv" component={CvPage}></Route>
          <Route exact={true} path="/selectieCV" component={SelectieCVPage}></Route>
          <Route exact={true} path="/instructiuni" component={InstructiuniPage}></Route>
          <Route exact={true} path="/show" component={ShowJobsAndCvs}></Route>
     </Switch>
   </Router>
  );
}

export default App;
