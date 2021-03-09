import { Menu } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import MenuItem from "antd/lib/menu/MenuItem";
import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./config/routes";
import CustomRouter from "./custom_router"


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
                            <CustomRouter configs={routes} mainPagePath={"/"} />
                        </Content>
                    </Layout>
                </Layout>
                
           </HashRouter>
       ) 
    }
}