import axios from 'axios'
import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_TODO_LIST,
    GET_INIT_LIST
} from './actionType'

// action 永远都是一个对象
export const getInputChangeAction = value => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteTodoItemAction = index => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initTodoListAction = data => ({
    type: INIT_TODO_LIST,
    data
})

// Redux-saga action 方法
export const getReduxSagaList = () => ({
    type: GET_INIT_LIST
})

// 由于使用了 redux-thunk 在 action 中进行异步操作
// 可以在action的对象操作中，return 出一个函数
export const getReduxThunkList = () => {
    // dispatch 从外部的 store.dispatch 方法中默认传入的
    return (dispatch) => {
        axios.get('/api/todolist').then(res => {
            const action = initTodoListAction(res.data)
            dispatch(action)
        }).catch(err => {
            console.log(err)
        })
    }
}
