import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import Proptypes from 'prop-types'

// 无状态组件
// 当组件只有 render 函数时，可使用无状态组件
// 相比较于普通的组件，性能更高
// 普通组件是个类，即需要执行 render 函数，还需要执行 生命周期函数
const TodoListUI = props => {
    const { inputValue, list, handleInputChange, handleButtonClick, handleDeleteItem } = props    
    return (
        <div style={{margin: "10px"}}>
            <div>
                <Input
                    placeholder="todo info"
                    style={{width: "500px", marginRight: "10px"}}
                    value={inputValue}
                    onChange={handleInputChange}/>
                <Button
                    type="primary"
                    onClick={handleButtonClick}>提交</Button>
            </div>
            <List
                style={{marginTop: "10px", width: "500px"}}
                bordered
                dataSource={list}
                renderItem={(item, index) => (<List.Item
                    onClick={() => {handleDeleteItem(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}
TodoListUI.propTypes = {
    inputValue: Proptypes.string.isRequired,
    list: Proptypes.array,
    handleInputChange: Proptypes.func.isRequired,
    handleButtonClick: Proptypes.func.isRequired,
    handleDeleteItem: Proptypes.func.isRequired
}

export default TodoListUI
