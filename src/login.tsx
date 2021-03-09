import React from 'react';
import { Button, Card, Space, Form, Input, Checkbox } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { save } from './services/user_service'

class Login extends React.PureComponent<RouteComponentProps>{
    layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    tailLayout = {
        wrapperCol: { offset: 8, span: 16 }
    };
    form= null;
    constructor(props:any) {
        super(props);
        this.form = React.createRef();
    }

    componentDidMount() {
        console.log("login.tsx");
    }

    onReset = () => {
        this.form.current.resetFields();
    };

    render = () => {
        
        console.log("login.tsx::render");
        return (
            <div className="xc-login">
                <Card size="default" className="xc-card">
                <Form 
                    ref={this.form}
                    {...this.layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}>
                            
                            <Form.Item    
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <Form.Item {...this.tailLayout}>
                                <Space size={8}>
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                                <Button htmlType="button" onClick={this.onReset}>
                                    重置
                                </Button>
                                </Space>
                                
                            </Form.Item>
                </Form>
                </Card>
                    </div>
        );
    }

    onFinish = (values: any) => {
        //保留token和当前用户信息
        save({
            id: 100,
            name: values["username"],
            token: "abc123",
            isOnline: true,
        });
        this.props.history.push({pathname:"/"});
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
}

export default withRouter(Login);


