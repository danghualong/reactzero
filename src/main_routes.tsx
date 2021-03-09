import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RouteConfig } from "./models"

interface IProps{
    configs: RouteConfig[],
    mainPagePath:string
}

export default class extends React.PureComponent<IProps>{
    render() {
        const items = [];
        this.props.configs.map(p => items.push(<Route key={p.path} path={p.path} exact={p.exact} component={p.component}></Route>));
        return (
            <Switch>
                {items}
                <Redirect to={this.props.mainPagePath}/>
            </Switch>
       );
    }
}