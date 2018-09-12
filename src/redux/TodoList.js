import React, { Component, Fragment } from 'react'
import store from './store'
import TodoListUI from './TodoListUI'
import {
    getInputChangeAction,
    getAddTodoItemAction,
    getDeleteTodoItemAction,
    getReduxThunkList,
    getReduxSagaList
} from './store/actionCreator'

class TodoList extends Component {
    constructor(props) {
        super(props)
        // 获取 store 中 state 的方法： getState
        this.state = store.getState()
        // 订阅 store 监听 state 中数值的变化
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount() {
        // redux-thunk 进行异步操作
        // 此时的action是函数，
        // 调用 store.dispatch action函数会自动执行
        const action = getReduxThunkList()

        // redux-saga  进行异步操作
        // const action = getReduxSagaList()
        store.dispatch(action)
    }
    handleStoreChange = () => {
        // 重新获取 store 的数据，并替换旧数据
        this.setState(store.getState())
    }
    handleInputChange = (e) => {
        // action 用于修改 store 中的 state
        // type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。
        // 当应用规模越来越大时，建议使用单独的模块或文件来存放 action。
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        // 将定义好的 action 传给 store
        store.dispatch(action)
    }
    handleButtonClick = () => {
        const action = getAddTodoItemAction()
        store.dispatch(action)

        // redux-saga 进行异步操作

    }
    handleItemDelete = (index) => {
        const action = getDeleteTodoItemAction(index)
        store.dispatch(action)
    }
    render() {
        const { inputValue, list } = this.state
        return (
            <TodoListUI 
                inputValue={inputValue}
                list={list}
                handleInputChange={this.handleInputChange}
                handleButtonClick={this.handleButtonClick}
                handleItemDelete={this.handleItemDelete}/>
        )
    }
}

export default TodoList
