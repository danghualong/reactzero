import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import AuthRoute from './components/auth_route'
const Login = React.lazy(()=>import('./login'));
const MainLayout = React.lazy(()=>import('./main_layout'));

export default class Routes extends React.Component{
    render() {
        return (
            <Router>
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <AuthRoute exact path="/" component={MainLayout}/>
                        <Redirect to="/"></Redirect>
                    </Switch>
                </Suspense>
            </Router>
        )
    }
};