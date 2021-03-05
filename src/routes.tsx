import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from './login'
import Index from './index'
import Todo from "./todo_view"

export default class Routes extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Index}>
                    </Route>
                    <Route exact path="/todo" component={Todo}>
                    </Route>
                    <Route exact path="/login" component={Login}>
                    </Route>
                </Switch>
            </Router>
        )
    }
};