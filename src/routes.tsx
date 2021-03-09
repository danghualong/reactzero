import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import AuthRoute from './components/auth_route'
const Login = React.lazy(()=>import('./login'));
const Main = React.lazy(()=>import('./main'));

export default class Routes extends React.Component{
    render() {
        return (
            <Router>
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <AuthRoute exact path="/login" component={Login} />
                        <AuthRoute requireLogin exact path="/" component={Main} />
                        <Redirect to="/"></Redirect>
                    </Switch>
                </Suspense>
            </Router>
        )
    }
};