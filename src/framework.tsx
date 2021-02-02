import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from './login'
import Index from './index'
import {TodoListComponent} from "./todos"
import './index.css'

export default class Framework extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Index}>

                    </Route>
                    <Route exact path="/login" component={Login}>
                    </Route>
                    
                    <Route exact path="/test" component={TodoListComponent}>
                    </Route>
                </Switch>
            </Router>
        )
    }
};