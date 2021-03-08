import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
    Redirect,
  Route,
  Switch
} from "react-router-dom";
import AuthRoute from './components/auth_route'
const Login = React.lazy(()=>import('./login'));
const Index = React.lazy(()=>import('./index'));
const Todo = React.lazy(()=>import("./module/todos/todo_view"));

export default class Routes extends React.Component{
    render() {
        return (
            <Router>
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <AuthRoute exact path="/" component={Index}/>
                        <AuthRoute exact path="/todo" component={Todo}/>
                        <Redirect to="/"></Redirect>
                    </Switch>
                </Suspense>
            </Router>
        )
    }
};