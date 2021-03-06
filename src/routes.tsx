import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AuthRoute from './auth_route'
import Login from './login'
import Index from './index'
import Todo from "./todo_view"

export default class Routes extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/todo" component={Todo}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </Router>
        )
    }
};