import React from 'react';
import { Button, Space, Form, Input, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';
import "./index"

class Login extends React.PureComponent<{}, {}>{
    layout = {
        labelCol: { span: 8 },
  wrapperCol: { span: 16 },
    };
    tailLayout = {
        wrapperCol: { offset: 4, span: 16 }
    };
    form= null;
    constructor(props:any) {
        super(props);
        this.form = React.createRef();
    }
    componentDidMount() {
        
    }
    onReset = () => {
        this.form.current.resetFields();
    };
    render() {
        return (
            <div className="xc-login">
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
            </div>
        );
    }

    onFinish = (values: any) => {
        console.log(values);
        this.props.history.push({pathname:"/",name:"Mr.Wang"});
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
}

export default withRouter(Login);

