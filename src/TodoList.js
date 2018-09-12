import React, { Component, Fragment } from 'react'
// import store from './store'
import { connect } from 'react-redux'
// import TodoListUI from './TodoListUI'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction
} from './store/actionCreator'


const TodoList = props => {
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

// 使 store 与组件 TodoList 相连接
// mapStateToProps  连接规则
// 将 state 中的数据映射到 props 里面
const mapStateToProps = state => ({
    inputValue: state.inputValue,
    list: state.list
})
// mapDispatchToProps
// store.dispatch , props
// 将 store.dispatch 方法挂载到 props 上
const mapDispatchToProps = dispatch =>({
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        dispatch(action)
    },
    handleButtonClick() {
        const action = getAddItemAction()
        dispatch(action)
    },
    handleDeleteItem(index) {
        const action = getDeleteItemAction(index)
        dispatch(action)
    }
})

// 此时 TodoList 为 UI 组件，
// 当 connect 将业务逻辑与 TodoList 相结合时，此时暴露的是 容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
