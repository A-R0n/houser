import React from 'react';
import Wizard from './Components/Wizard/Wizard';
import Dashboard from './Components/Dashboard/Dashboard';


import { Switch, Route, HashRouter } from 'react-router-dom';


export default (

    <Switch className="App">
        <Route exact path="/" component={Dashboard}/>
        <Route path="/wizard" component={Wizard} />
    </Switch>
)

 

 
