import React from 'react';
import { Button, Checkbox } from 'antd'

interface TodoProps {
    id: number
    content: string
    onChange: () => void
    onDelete: () => void
}

export default class TodoItem extends React.PureComponent<TodoProps>{
    render() {
        return (
            <li>
                <Checkbox onChange={this.props.onChange} />
                <label>{this.props.id}</label>
                <label>{this.props.content}</label>
                <Button onClick={this.props.onDelete}>X</Button>
            </li>
        );
    }
}
