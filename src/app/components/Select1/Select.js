import React from 'react'
import './Select.scss'
import { Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class Select1 extends React.Component {

    _handleClick(e) {
        console.log(e)
        this.props.callbackParent(e.key)
    }

    render() {
        let datas = this.props.items
        let options = []
        if (datas.subs) {
             datas.subs.map((v, i) => {
                options.push(
                    <Option key={v.key} value={v.key}>{v.title}</Option>
                ) 
            })
        }

        return (
            <div className = "menu-select1">
                <Select defaultValue={datas.title} onChange={handleChange}>
                    {options}
                </Select>
            </div>
        )

    }
}