import React, { Component } from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css';

export default class SelectionBar extends Component {
    state = { optionVal: '0' };

    selectChange = (value) => {
        this.setState((prevState) => ({
            ...prevState,
            optionVal: value,
        }));
        console.log('optionVal', this.state.optionVal);
    }

    render() {
        return (
            <div>
                <Select defaultValue="0" value={this.setState.optionVal} style={{ width: 200 }} onSelect={this.selectChange}>
                    <Select.Option value="0" >Python Dev</Select.Option>
                    <Select.Option value="1" >Android</Select.Option>
                </Select>
                {this.state.optionVal == '0' && <h3>Python Dev</h3>}
                {this.state.optionVal == '1' && <h3>Android</h3>}
            </div>
        )
    }
}
