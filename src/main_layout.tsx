import { Menu } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import MenuItem from "antd/lib/menu/MenuItem";
import React from "react";
import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Index from "./index";
import Todo from "./module/todos/todo_view";
import routes from "./config/routes";
import MainRoutes from "./main_routes"


export default class extends React.PureComponent{
    render() {
        return (
            <HashRouter>
                <Layout>
                    <Header><h1>哇哈哈</h1></Header>
                    <Layout>
                        <Sider>
                            <Menu theme="light" mode="inline" selectedKeys={["1"]}>
                                <MenuItem key="1">首页</MenuItem>
                                <Menu.SubMenu key="2" title="Todos">
                                    <MenuItem key="3">TodoList</MenuItem>
                                    <MenuItem key="4">AddTodo</MenuItem>
                                </Menu.SubMenu>
                            </Menu>
                        </Sider>
                        <Content>
                            <MainRoutes configs={routes} mainPagePath={"/"} />
                        </Content>
                    </Layout>
                </Layout>
                
           </HashRouter>
       ) 
    }
}